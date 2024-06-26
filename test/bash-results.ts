// generated via 'npm run test-regen'
import { fileURLToPath } from 'url'

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('TAP version 14\n1..1\nok\n')
}

export const bashResults: { [path: string]: string[] } = {
  'a/c/d/*/b': ['a/c/d/c/b'],
  'a//c//d//*//b': ['a/c/d/c/b'],
  'a/*/d/*/b': ['a/c/d/c/b'],
  'a/*/+(c|g)/./d': ['a/b/c/d'],
  'a/**/[cg]/../[cg]': [
    'a/abcdef/g',
    'a/abcfed/g',
    'a/b/c',
    'a/c',
    'a/c/d/c',
    'a/symlink/a/b/c',
  ],
  'a/{b,c,d,e,f}/**/g': [],
  'a/b/**': ['a/b', 'a/b/c', 'a/b/c/d'],
  './**/g': ['a/abcdef/g', 'a/abcfed/g'],
  'a/abc{fed,def}/g/h': ['a/abcdef/g/h', 'a/abcfed/g/h'],
  'a/abc{fed/g,def}/**/': ['a/abcdef', 'a/abcdef/g', 'a/abcfed/g'],
  'a/abc{fed/g,def}/**///**/': ['a/abcdef', 'a/abcdef/g', 'a/abcfed/g'],
  '**/a': ['a', 'a/symlink/a'],
  '**/a/**': [
    'a',
    'a/abcdef',
    'a/abcdef/g',
    'a/abcdef/g/h',
    'a/abcfed',
    'a/abcfed/g',
    'a/abcfed/g/h',
    'a/b',
    'a/b/c',
    'a/b/c/d',
    'a/bc',
    'a/bc/e',
    'a/bc/e/f',
    'a/c',
    'a/c/d',
    'a/c/d/c',
    'a/c/d/c/b',
    'a/cb',
    'a/cb/e',
    'a/cb/e/f',
    'a/symlink',
    'a/symlink/a',
    'a/symlink/a/b',
    'a/symlink/a/b/c',
    'a/x',
    'a/z',
  ],
  './**/a': ['a', 'a/symlink/a', 'a/symlink/a/b/c/a'],
  './**/a/**/': [
    'a',
    'a/abcdef',
    'a/abcdef/g',
    'a/abcfed',
    'a/abcfed/g',
    'a/b',
    'a/b/c',
    'a/bc',
    'a/bc/e',
    'a/c',
    'a/c/d',
    'a/c/d/c',
    'a/cb',
    'a/cb/e',
    'a/symlink',
    'a/symlink/a',
    'a/symlink/a/b',
    'a/symlink/a/b/c',
    'a/symlink/a/b/c/a',
    'a/symlink/a/b/c/a/b',
    'a/symlink/a/b/c/a/b/c',
    'a/x',
    'a/z',
  ],
  './**/a/**': [
    'a',
    'a/abcdef',
    'a/abcdef/g',
    'a/abcdef/g/h',
    'a/abcfed',
    'a/abcfed/g',
    'a/abcfed/g/h',
    'a/b',
    'a/b/c',
    'a/b/c/d',
    'a/bc',
    'a/bc/e',
    'a/bc/e/f',
    'a/c',
    'a/c/d',
    'a/c/d/c',
    'a/c/d/c/b',
    'a/cb',
    'a/cb/e',
    'a/cb/e/f',
    'a/symlink',
    'a/symlink/a',
    'a/symlink/a/b',
    'a/symlink/a/b/c',
    'a/symlink/a/b/c/a',
    'a/symlink/a/b/c/a/b',
    'a/symlink/a/b/c/a/b/c',
    'a/x',
    'a/z',
  ],
  './**/a/**/a/**/': [
    'a/symlink/a',
    'a/symlink/a/b',
    'a/symlink/a/b/c',
    'a/symlink/a/b/c/a',
    'a/symlink/a/b/c/a/b',
    'a/symlink/a/b/c/a/b/c',
    'a/symlink/a/b/c/a/b/c/a',
    'a/symlink/a/b/c/a/b/c/a/b',
    'a/symlink/a/b/c/a/b/c/a/b/c',
  ],
  '+(a|b|c)/a{/,bc*}/**': [
    'a/abcdef',
    'a/abcdef/g',
    'a/abcdef/g/h',
    'a/abcfed',
    'a/abcfed/g',
    'a/abcfed/g/h',
  ],
  '*/*/*/f': ['a/bc/e/f', 'a/cb/e/f'],
  './**/f': ['a/bc/e/f', 'a/cb/e/f'],
  'a/symlink/a/b/c/a/b/c/a/b/c//a/b/c////a/b/c/**/b/c/**': [
    'a/symlink/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c',
    'a/symlink/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c/a',
    'a/symlink/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c/a/b',
    'a/symlink/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c/a/b/c',
  ],
  '{./*/*,/tmp/glob-test/*}': [
    '/tmp/glob-test/asdf',
    '/tmp/glob-test/bar',
    '/tmp/glob-test/baz',
    '/tmp/glob-test/foo',
    '/tmp/glob-test/quux',
    '/tmp/glob-test/qwer',
    '/tmp/glob-test/rewq',
    'a/abcdef',
    'a/abcfed',
    'a/b',
    'a/bc',
    'a/c',
    'a/cb',
    'a/symlink',
    'a/x',
    'a/z',
  ],
  '{/tmp/glob-test/*,*}': [
    '/tmp/glob-test/asdf',
    '/tmp/glob-test/bar',
    '/tmp/glob-test/baz',
    '/tmp/glob-test/foo',
    '/tmp/glob-test/quux',
    '/tmp/glob-test/qwer',
    '/tmp/glob-test/rewq',
    'a',
  ],
  'a/!(symlink)/**': [
    'a/abcdef',
    'a/abcdef/g',
    'a/abcdef/g/h',
    'a/abcfed',
    'a/abcfed/g',
    'a/abcfed/g/h',
    'a/b',
    'a/b/c',
    'a/b/c/d',
    'a/bc',
    'a/bc/e',
    'a/bc/e/f',
    'a/c',
    'a/c/d',
    'a/c/d/c',
    'a/c/d/c/b',
    'a/cb',
    'a/cb/e',
    'a/cb/e/f',
    'a/x',
    'a/z',
  ],
  'a/symlink/a/**/*': [
    'a/symlink/a/b',
    'a/symlink/a/b/c',
    'a/symlink/a/b/c/a',
  ],
  'a/!(symlink)/**/..': [
    'a',
    'a/abcdef',
    'a/abcfed',
    'a/b',
    'a/bc',
    'a/c',
    'a/c/d',
    'a/cb',
  ],
  'a/!(symlink)/**/../': [
    'a',
    'a/abcdef',
    'a/abcfed',
    'a/b',
    'a/bc',
    'a/c',
    'a/c/d',
    'a/cb',
  ],
  'a/!(symlink)/**/../*': [
    'a/abcdef',
    'a/abcdef/g',
    'a/abcfed',
    'a/abcfed/g',
    'a/b',
    'a/b/c',
    'a/bc',
    'a/bc/e',
    'a/c',
    'a/c/d',
    'a/c/d/c',
    'a/cb',
    'a/cb/e',
    'a/symlink',
    'a/x',
    'a/z',
  ],
  'a/!(symlink)/**/../*/*': [
    'a/abcdef/g',
    'a/abcdef/g/h',
    'a/abcfed/g',
    'a/abcfed/g/h',
    'a/b/c',
    'a/b/c/d',
    'a/bc/e',
    'a/bc/e/f',
    'a/c/d',
    'a/c/d/c',
    'a/c/d/c/b',
    'a/cb/e',
    'a/cb/e/f',
    'a/symlink/a',
  ],
}
