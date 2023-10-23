const conv = require('../')

test('Angular', () => {
  let tag = 'docs'
  const convention = 'angular'
  expect(conv({ tag, msg: 'add Berkmann18', convention })).toStrictEqual('docs: add Berkmann18')
  expect(conv({ tag, msg: 'Add Berkmann18', convention })).toStrictEqual('docs: add Berkmann18')
  expect(conv({ tag, msg: 'Add X and Y', convention })).toStrictEqual('docs: add X and Y')
  tag = 'chore'
  expect(conv({ tag, msg: 'Update deps', convention })).toStrictEqual('chore: update deps')
  expect(conv({ tag, msg: 'do something', convention })).toStrictEqual('chore: do something')
  expect(conv({ tag, msg: 'try X', convention })).toStrictEqual('chore: try X')
})

test('Atom', () => {
  let tag = 'docs'
  const convention = 'atom'
  expect(conv({ tag, msg: 'add Berkmann18', convention })).toStrictEqual('📝 Add Berkmann18')
  expect(conv({ tag, msg: 'Add Berkmann18', convention })).toStrictEqual('📝 Add Berkmann18')
  expect(conv({ tag, msg: 'Add X and Y', convention })).toStrictEqual('📝 Add X and Y')
  tag = 'test'
  expect(conv({ tag, msg: 'Add test', convention })).toStrictEqual('✅ Add test')
  expect(conv({ tag, msg: 'change test', convention })).toStrictEqual('✅ Change test')
  expect(conv({ tag, msg: 'try X', convention })).toStrictEqual('✅ Try X')
})

test('Ember', () => {
  let tag = 'docs'
  const convention = 'ember'
  expect(conv({ tag, msg: 'add Berkmann18', convention })).toStrictEqual('[DOC canary] Add Berkmann18')
  expect(conv({ tag, msg: 'Add Berkmann18', convention })).toStrictEqual('[DOC canary] Add Berkmann18')
  expect(conv({ tag, msg: 'Add X and Y', convention })).toStrictEqual('[DOC canary] Add X and Y')
  tag = 'chore'
  expect(conv({ tag, msg: 'Update deps', convention })).toStrictEqual('[CLEANUP beta] Update deps')
  expect(conv({ tag, msg: 'do something', convention })).toStrictEqual('[CLEANUP beta] Do something')
  expect(conv({ tag, msg: 'try X', convention })).toStrictEqual('[CLEANUP beta] Try X')
})

test('ESLint', () => {
  let tag = 'docs'
  const convention = 'eslint'
  expect(conv({ tag, msg: 'add Berkmann18', convention })).toStrictEqual('Docs: Add Berkmann18')
  expect(conv({ tag, msg: 'Add Berkmann18', convention })).toStrictEqual('Docs: Add Berkmann18')
  expect(conv({ tag, msg: 'Add X and Y', convention })).toStrictEqual('Docs: Add X and Y')
  tag = 'chore'
  expect(conv({ tag, msg: 'Update deps', convention })).toStrictEqual('Chore: Update deps')
  expect(conv({ tag, msg: 'do something', convention })).toStrictEqual('Chore: Do something')
  expect(conv({ tag, msg: 'try X', convention })).toStrictEqual('Chore: Try X')
})

test('JSHint', () => {
  let tag = 'docs'
  const convention = 'jshint'
  expect(conv({ tag, msg: 'add Berkmann18', convention })).toStrictEqual('[[DOCS]] Add Berkmann18')
  expect(conv({ tag, msg: 'Add Berkmann18', convention })).toStrictEqual('[[DOCS]] Add Berkmann18')
  expect(conv({ tag, msg: 'Add X and Y', convention })).toStrictEqual('[[DOCS]] Add X and Y')
  tag = 'chore'
  expect(conv({ tag, msg: 'Update deps', convention })).toStrictEqual('[[CHORE]] Update deps')
  expect(conv({ tag, msg: 'do something', convention })).toStrictEqual('[[CHORE]] Do something')
  expect(conv({ tag, msg: 'try X', convention })).toStrictEqual('[[CHORE]] Try X')
})

test('Gitmoji', () => {
  let tag = 'docs'
  const convention = 'gitmoji'
  expect(conv({ tag, msg: 'add Berkmann18', convention })).toStrictEqual('📝 Add Berkmann18')
  expect(conv({ tag, msg: 'Add Berkmann18', convention })).toStrictEqual('📝 Add Berkmann18')
  expect(conv({ tag, msg: 'Add X and Y', convention })).toStrictEqual('📝 Add X and Y')
  tag = 'refactor'
  expect(conv({ tag, msg: 'Refactor code', convention })).toStrictEqual('♻️ Refactor code')
  expect(conv({ tag, msg: 'merge test', convention })).toStrictEqual('♻️ Merge test')
})

test('None', () => {
  let tag = 'docs'
  const convention = ''
  expect(conv({ tag, msg: 'add Berkmann18', convention })).toStrictEqual('add Berkmann18')
  expect(conv({ tag, msg: 'Add Berkmann18', convention })).toStrictEqual('Add Berkmann18')
  expect(conv({ tag, msg: 'Add X and Y', convention })).toStrictEqual('Add X and Y')
  tag = 'chore'
  expect(conv({ tag, msg: 'Update deps', convention })).toStrictEqual('Update deps')
  expect(conv({ tag, msg: 'do something', convention })).toStrictEqual('do something')
  expect(conv({ tag, msg: 'try X', convention })).toStrictEqual('try X')
})

test('Unknown convention', () => {
  expect(conv({ tag: 'docs', msg: 'add Berkmann18' })).toStrictEqual('add Berkmann18')
})

test('Unknown tag', () => {
  expect(() => conv({ msg: 'add Berkmann18', convention: 'eslint' })).toThrowError('tag is required')
})

test('Unknown msg', () => {
  expect(() => conv({ tag: 'chore', convention: 'eslint' })).toThrowError('msg is required')
})

test('Invalid convention', () => {
  expect(() => conv({ tag: 'fix', msg: 'close #1', convention: 'xyz' })).toThrowError('"xyz" isn\'t a valid/supported convention')
})
test('Invalid tag', () => {
  expect(() => conv({ tag: 'update', msg: 'add Berkmann18', convention: 'angular' })).toThrowError('"update" isn\'t a tag in the angular convention')
})

