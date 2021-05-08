const chalk = require('chalk');

const logColorMapping = {
  danger: 'red',
  warning: 'yellow',
  info: 'blue',
  success: 'green',
  error: 'red',
};

const generateLog = () => {
  const log = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in logColorMapping) {
    if (Object.hasOwnProperty.call(logColorMapping, key)) {
      const color = logColorMapping[key];
      log[key] = (message) => {
        console.log(chalk[color](message));
      };
    }
  }
  return log;
};

const colorLog = generateLog();

module.exports = {
  colorLog,
  logColorMapping,
};
