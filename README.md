<p align="center"><img src="https://raw.githubusercontent.com/kavience/willow-component-template/master/public/assets/logo.png?raw=true" /></p>
<h1 align="center">willow-component-tool</h1>

## Introduction

Tool for quickly and simply build react component

## Usage

install willow-component-tool
```bash
npm i -g willow-component-tool
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

## Thanks
Refer to their projects:

- [rc-tools](https://github1s.com/react-component/rc-tools)
- [dumi](https://d.umijs.org)