<h1 align="center">willow-component-tool</h1>

## Introduction

Tool for quickly and simply build react component

## Usage

install willow-component-tool
```bash
npm i -g willow-tool
```

init a project

```bash
willow-tool init
```

type project info and wait project init, `cd` the project, and run `yarn` or `npm i` install depdences.

## Template Directory

```bash 
|- assets # less file and others
|- docs   # components docs, i18n is supported
|- lib    # js file after build
|- src    # source code
|- tests  # test file
|- .eslintsr.js
|- .gitignore
|- .prettierrc
|- .umirc.ts
|- babel.config.js
|- jest.config.js
|- jest.setup.js
|- rollup.config.js
|- tsconfig.json
|- update-demo.js
|- ...
```

## Scripts

```js
"scripts": {
  // dev mod
  "dev": "npm run update-demo && dumi dev",
  // build docs and lib
  "build": "npm run update-demo && dumi build && npm run lib:build",
  // build lib only
  "lib:build": "cross-env NODE_ENV=prod rollup -c",
  // update examples to demo
  "update-demo": "node update-demo.js",
  // lint-staged
  "lint": "lint-staged",
  // run test
  "test": "cross-env IS_TEST=true jest",
  "test:with-coverage": "cross-env IS_TEST=true TEST_COVERAGE=true jest",
  // init husky
 "husky:init": "husky install && husky set .husky/pre-commit 'npm run test' && husky set .husky/pre-commit 'npm run lint'"
}
```

## Thanks
Refer to their projects:

- [rc-tools](https://github1s.com/react-component/rc-tools)
- [dumi](https://d.umijs.org)