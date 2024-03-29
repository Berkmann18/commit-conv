# commit-conv

[![NPM](https://nodei.co/npm/commit-conv.png)](https://nodei.co/npm/commit-conv/)
[![Downloads](https://img.shields.io/npm/dm/commit-conv.svg)](https://npmcharts.com/compare/commit-conv?minimal=true)
[![Inline docs](http://inch-ci.org/github/Berkmann18/commit-conv.svg?branch=master)](http://inch-ci.org/github/Berkmann18/commit-conv)

[![NodeVersion](https://img.shields.io/node/v/commit-conv.svg)](https://github.com/Berkmann18/commit-conv)
[![GitHub package version](https://img.shields.io/github/package-json/v/Berkmann18/commit-conv.svg)](https://github.com/Berkmann18/commit-conv)
[![devDependencies Status](https://david-dm.org/berkmann18/commit-conv/dev-status.svg)](https://david-dm.org/berkmann18/commit-conv?type=dev)
[![dependencies Status](https://david-dm.org/berkmann18/commit-conv/status.svg)](https://david-dm.org/berkmann18/commit-conv)

[![GH Downloads](https://img.shields.io/github/downloads/Berkmann18/commit-conv/total.svg)](https://github.com/Berkmann18/commit-conv/network/members)
[![GitHub commit activity the past year](https://img.shields.io/github/commit-activity/y/Berkmann18/commit-conv.svg)](https://github.com/Berkmann18/commit-conv/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/Berkmann18/commit-conv.svg)](https://github.com/Berkmann18/commit-conv/graphs/contributors)
[![Github search hit counter](https://img.shields.io/github/search/Berkmann18/commit-conv/goto.svg)](https://github.com/Berkmann18/commit-conv/graphs/traffic)

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=Berkmann18/commit-conv)](https://dependabot.com)
[![Build Status](https://travis-ci.org/Berkmann18/commit-conv.svg?branch=master)](https://travis-ci.org/Berkmann18/commit-conv)
[![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/Berkmann18/commit-conv.svg?maxAge=2592000)](https://codecov.io/github/Berkmann18/commit-conv?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![eslint](https://aleen42.github.io/badges/src/eslint.svg)](./eslintrc.json)
[![Known Vulnerabilities](https://snyk.io/test/github/Berkmann18/commit-conv/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Berkmann18/commit-conv?targetFile=package.json)

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![GitHub](https://img.shields.io/github/license/Berkmann18/commit-conv.svg)](https://github.com/Berkmann18/commit-conv/blob/master/LICENSE)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Berkmann18/commit-conv/issues)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![GitHub top language](https://img.shields.io/github/languages/top/Berkmann18/commit-conv.svg)](https://github.com/Berkmann18/commit-conv)
[![GitHub language count](https://img.shields.io/github/languages/count/Berkmann18/commit-conv.svg)](https://github.com/Berkmann18/commit-conv)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Berkmann18/commit-conv.svg)](https://github.com/Berkmann18/commit-conv)

[![BCH compliance](https://bettercodehub.com/edge/badge/Berkmann18/commit-conv?branch=master)](https://bettercodehub.com/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a772e53fef984a558ef4741392bd926d)](https://www.codacy.com/app/maxieberkmann/commit-conv?utm_source=github.com&utm_medium=referral&utm_content=Berkmann18/commit-conv&utm_campaign=Badge_Grade)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Converts commit messages based on commit conventions.

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [commitConv](#commitconv)
    -   [Parameters](#parameters)
    -   [Examples](#examples)

### commitConv

[index.js:36-68](https://Berkmann18@github.com/Berkmann18/commit-conv/blob/f2cfea85238195f356f5a850ccf76cf80e6fef06/index.js#L36-L68 "Source code on GitHub")

Convert a commit message into one that follows the specified commit `convention`.

#### Parameters

-   `param` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Parameters
    -   `param.tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Tag of the commit message (e.g: `fix`, `chore`, `feat`, `docs`, `test`, ...) (optional, default `required('tag')`)
    -   `param.msg` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Header of the commit message (optional, default `required('msg')`)
    -   `param.convention` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of the commit convention (`angular`, `atom`, `ember`, `eslint`, `jshint`, `gitmoji` or `none`) (optional, default `''`)

#### Examples

```javascript
commitConv({tag: 'docs', msg: 'Update README.md', convention: 'angular'}); //'docs: update README.md'
commitConv({tag: 'fix', msg: 'bye bye #1', convention: 'eslint'}); //'Fix: Bye bye #1'
```

-   Throws **[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)** Invalid convention
-   Throws **[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)** Invalid tag in specified convention

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Commit message

## Contributions

Please refer to [that](.github/CONTRIBUTING.md).

## Contributors

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4?s=100" width="100px;" alt="Maximilian Berkmann"/><br /><sub><b>Maximilian Berkmann</b></sub></a><br /><a href="https://github.com/Berkmann18/commit-conv/commits?author=Berkmann18" title="Code">💻</a> <a href="https://github.com/Berkmann18/commit-conv/commits?author=Berkmann18" title="Documentation">📖</a> <a href="#ideas-Berkmann18" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-Berkmann18" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-Berkmann18" title="Maintenance">🚧</a> <a href="https://github.com/Berkmann18/commit-conv/commits?author=Berkmann18" title="Tests">⚠️</a> <a href="#example-Berkmann18" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://semantic-release.org/"><img src="https://avatars1.githubusercontent.com/u/32174276?v=4?s=100" width="100px;" alt="Semantic Release Bot"/><br /><sub><b>Semantic Release Bot</b></sub></a><br /><a href="#platform-semantic-release-bot" title="Packaging/porting to new platform">📦</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.bbourgeois.dev"><img src="https://avatars.githubusercontent.com/u/20949060?v=4?s=100" width="100px;" alt="Benjamin Bourgeois"/><br /><sub><b>Benjamin Bourgeois</b></sub></a><br /><a href="https://github.com/Berkmann18/commit-conv/commits?author=bengeois" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind are welcome!

## LICENSE

[MIT](./LICENSE)
