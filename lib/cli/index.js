'use strict';

const chalk = require('chalk');
const program = require('commander');
const packageInfo = require('../../package.json');

function logo() {
  /*
           _________ _        _        _______          
  |\     /|\__   __/( \      ( \      (  ___  )|\     /|
  | )   ( |   ) (   | (      | (      | (   ) || )   ( |
  | | _ | |   | |   | |      | |      | |   | || | _ | |
  | |( )| |   | |   | |      | |      | |   | || |( )| |
  | || || |   | |   | |      | |      | |   | || || || |
  | () () |___) (___| (____/\| (____/\| (___) || () () |
  (_______)\_______/(_______/(_______/(_______)(_______)
  */
}

console.log(
  chalk.green(
    logo.toString().substring(logo.toString().indexOf('/*') + 3, logo.toString().lastIndexOf('*/'))
  )
);

program
  .version(`Willow tool version now is: ${chalk.magenta(`v${packageInfo.version}`)}`)
  .command('init', 'init a react component demo')
  .parse(process.argv);

// https://github.com/tj/commander.js/pull/260
const proc = program.runningCommand;
if (proc) {
  proc.on('close', process.exit.bind(process));
  proc.on('error', () => {
    process.exit(1);
  });
}

process.on('SIGINT', () => {
  if (proc) {
    proc.kill('SIGKILL');
  }
  process.exit(0);
});
