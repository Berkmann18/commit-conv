const tagDict = require('./src/tag')

/**
 * Capitalize a word when used as the `replace` callback.
 * @param {*} _ RE result
 * @param  {...string} chars Characters
 * @private
 */
const capitalize = (_, ...chars) => `${chars[0].toUpperCase()}${chars[1]}`

/**
 * Convert a commit message into one that follows the specified commit `convention`.
 * @param {Object<string>} param Parameters
 * @param {string} param.tag Tag of the commit message (e.g: `fix`, `chore`, `feat`, `docs`, `test`, ...)
 * @param {string} param.msg Header of the commit message
 * @param {string} param.convention Name of the commit convention (`angular`, `atom`, `ember`, `eslint`, `jshint`, `none`)
 * @returns {string} Commit message
 */
const commitConv = ({ tag, msg, convention }) => {
  let newTag = ''
  let newMsg = ''
  if (convention.length && convention !== 'none') {
    try {
      newTag = tagDict[convention][tag.toLowerCase()]
    } catch (err) {
      throw new Error(`Wrong tag ("${tag}") or convention ("${convention}")`)
    }
  }
  switch (convention) {
  case 'angular':
    newMsg = msg.replace(/^(\w+)/, (_, word) => word.toLowerCase())
    return `${newTag}: ${newMsg}`
  case 'atom':
    newMsg = msg.replace(/^(\w)(\w+)/, capitalize)
    return `${newTag} ${newMsg}`
  case 'ember':
    newMsg = msg.replace(/^(\w)(\w+)/, capitalize)
    return `[${newTag}] ${newMsg}`
  case 'eslint':
    newMsg = msg.replace(/^(\w)(\w+)/, capitalize)
    return `${newTag}: ${newMsg}`
  case 'jshint':
    newMsg = msg.replace(/^(\w)(\w+)/, capitalize)
    return `[[${newTag}]] ${newMsg}`
  default:
    return `${msg}`
  }
}

module.exports = commitConv