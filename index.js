const tagDict = require('./src/tag')

/**
 * Capitalize a word when used as the `replace` callback.
 * @param {*} _ RE result
 * @param  {...string} chars Characters
 * @private
 */
const capitalize = (_, ...chars) => `${chars[0].toUpperCase()}${chars[1]}`

/**
 * Throws an error when a required parameter isn't specified.
 * @param {string} param Name of a required parameter
 * @throws {Error} Required parameter
 */
const required = (param) => {
  throw new Error(`${param} is required`)
}

const ONE_PLUS_RE = /^(\w)(\w+)/

/**
 * Convert a commit message into one that follows the specified commit `convention`.
 * @param {Object<string>} param Parameters
 * @param {string} param.tag Tag of the commit message (e.g: `fix`, `chore`, `feat`, `docs`, `test`, ...)
 * @param {string} param.msg Header of the commit message
 * @param {string} param.convention Name of the commit convention (`angular`, `atom`, `ember`, `eslint`, `jshint`, `none`)
 * @returns {string} Commit message
 * @throws {Error} Invalid convention
 * @throws {Error} Invalid tag in specified convention
 * @example
 * commitConv({tag: 'docs', msg: 'Update README.md', convention: 'angular'}); //'docs: update README.md'
 * commitConv({tag: 'fix', msg: 'bye bye #1', convention: 'eslint'}); //'Fix: Bye bye #1'
 */
const commitConv = ({
  tag = required('tag'),
  msg = required('msg'),
  convention = ''
}) => {
  let newTag = ''
  let newMsg = ''
  if (convention.length && convention !== 'none') {
    const tags = tagDict[convention]
    if (!tags) throw new Error(`"${convention}" isn't a valid/supported convention`)
    newTag = tags[tag.toLowerCase()]
    if (!newTag) throw new Error(`"${tag}" isn't a tag in the ${convention} convention`)
  }
  switch (convention) {
  case 'angular':
    newMsg = msg.replace(/^(\w+)/, (_, word) => word.toLowerCase())
    return `${newTag}: ${newMsg}`
  case 'atom':
    newMsg = msg.replace(ONE_PLUS_RE, capitalize)
    return `${newTag} ${newMsg}`
  case 'ember':
    newMsg = msg.replace(ONE_PLUS_RE, capitalize)
    return `[${newTag}] ${newMsg}`
  case 'eslint':
    newMsg = msg.replace(ONE_PLUS_RE, capitalize)
    return `${newTag}: ${newMsg}`
  case 'jshint':
    newMsg = msg.replace(ONE_PLUS_RE, capitalize)
    return `[[${newTag}]] ${newMsg}`
  default:
    return msg
  }
}

module.exports = commitConv
