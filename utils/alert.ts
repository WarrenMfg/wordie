import chalk from 'chalk';
import logSymbols from 'log-symbols';

const log = console.log;

const success = (msg: string) => {
  log();
  log(logSymbols.success, chalk.bold.green(`Success! >`), msg);
  log();
};

const info = (msg: string) => {
  log();
  log(logSymbols.info, chalk.bold.blue(`Info >`), msg);
  log();
};

const warning = (msg: string) => {
  log();
  log(logSymbols.warning, chalk.yellow.bold(`Warning >`), msg);
  log();
};

const error = (msg: string) => {
  log();
  log(logSymbols.error, chalk.bold.red(`Error >`), msg);
  log();
};

const alert = {
  success,
  info,
  warning,
  error,
};

export default alert;
