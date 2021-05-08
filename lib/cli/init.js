#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const ora = require('ora');
const shell = require('shelljs');
const fs = require('fs');
const { colorLog } = require('../utils/log');

program.parse(process.argv);

const questions = [
  {
    type: 'input',
    name: 'name',
    message: '组件名字是？',
    validate(value) {
      if (value) {
        return true;
      }

      return '请输入组件名字';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: '组件描述是？',
  },
  {
    type: 'input',
    name: 'author',
    message: '作者是？（例如：kavience <kavience@gmail.com>）',
    default: 'kavience <kavience@gmail.com>',
  },
  {
    type: 'input',
    name: 'gitRepository',
    message: 'git 仓库地址？（例如：git+https://github.com/kavience/willow-component.git）',
    default: 'git+https://github.com/kavience/willow-component.git',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const spinner = ora('Downloading...');
    spinner.start();

    download('kavience/willow-component-template', answers.name, (err) => {
      if (err) {
        spinner.fail();
        colorLog.error(err);
      } else {
        spinner.succeed();
        const fileName = `${answers.name}/package.json`;
        const meta = {
          name: answers.name,
          description: answers.description,
          author: answers.author,
          gitRepository: answers.gitRepository,
        };
        if (fs.existsSync(fileName)) {
          const content = fs.readFileSync(fileName).toString();
          const result = handlebars.compile(content)(meta);
          fs.writeFileSync(fileName, result);
        }
        colorLog.success('The project download success');
        inquirer
          .prompt([
            {
              type: 'confirm',
              name: 'ifInstall',
              message: 'Do you want to install dependences now?',
              default: true,
            },
          ])
          .then((answers) => {
            if (answers.ifInstall) {
              inquirer
                .prompt([
                  {
                    type: 'list',
                    name: 'installWay',
                    message: 'Choose the tool to install',
                    choices: ['npm', 'cnpm'],
                  },
                ])
                .then((ans) => {
                  if (ans.installWay === 'npm') {
                    const spinner = ora('Installing...');
                    spinner.start();
                    shell.exec(`cd ${answers.name} && npm i`, function (err) {
                      if (err) {
                        spinner.fail();
                        colorLog.error(err);
                      } else {
                        spinner.succeed();
                        colorLog.success('The project has installed dependence successfully!');
                      }
                    });
                  } else if (ans.installWay === 'cnpm') {
                    const spinner = ora('Installing...');
                    spinner.start();
                    shell.exec(`cd ${answers.name} && cnpm i`, function (err) {
                      if (err) {
                        spinner.fail();
                        colorLog.error(err);
                      } else {
                        spinner.succeed();
                        colorLog.success('The project has installed dependence successfully!');
                      }
                    });
                  }
                });
            } else {
              colorLog.success('You should install the dependence by yourself!');
            }
          });
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
