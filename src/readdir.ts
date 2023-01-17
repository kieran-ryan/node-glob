// this is a caching readdir that cuts down on excess syscalls,
// if the same directory needs to be read multiple times.

import { Dirent } from 'fs'

import {
  statSync,
  readdir as origReaddir,
  readdirSync as origReaddirSync,
} from 'fs'
import { basename, dirname, resolve } from 'path'

// when we read a directory, put its entries in here as well
export interface GlobCache {
  [path: string]: Dirent[] | false
}

export class Readdir {
  cache: GlobCache

  constructor(cache: GlobCache = Object.create(null)) {
    this.cache = cache
  }

  // alias cached lookup from p to realpath rp, if not already set
  alias(rp: string, p: string): void {
    if (!this.cache[rp]) {
      this.cache[rp] = this.cache[p]
    }
  }

  // look up the Dirent for the path, if it exists
  lookup(path: string): Dirent | undefined {
    const resolved = resolve(path)
    const dir = dirname(resolved)
    const entities = this.cache[dir]
    if (entities && Array.isArray(entities)) {
      return entities.find(e => e.name === basename(resolved))
    }
  }

  isDirectory(path: string): boolean {
    const resolved = resolve(path)
    return this.cache[resolved]
      ? Array.isArray(this.cache[resolved])
      : !!this.lookup(path)?.isDirectory()
  }

  async readdir(path: string): Promise<Dirent[] | false> {
    const resolved = resolve(path)
    const cacheEntry = this.cache[resolved]
    if (cacheEntry) {
      if (Array.isArray(cacheEntry)) {
        return cacheEntry
      } else {
        return false
      }
    }

    return new Promise<Dirent[] | false>(res => {
      origReaddir(resolved, { withFileTypes: true }, (_, entities) => {
        res((this.cache[resolved] = entities || false))
      })
    })
  }

  readdirSync(path: string): Dirent[] | false {
    const resolved = resolve(path)
    const cacheEntry = this.cache[resolved]
    if (cacheEntry) {
      if (Array.isArray(cacheEntry)) {
        return cacheEntry
      } else {
        return false
      }
    }
    // try to avoid getting an error object created if we can
    // stack traces are expensive, and we don't use them.
    const st = statSync(resolved, { throwIfNoEntry: false })
    if (!st || !st.isDirectory()) {
      return (this.cache[resolved] = false)
    }
    try {
      return (this.cache[resolved] = origReaddirSync(resolved, {
        withFileTypes: true,
      }))
    } catch (er) {
      return (this.cache[resolved] = false)
    }
  }
}
