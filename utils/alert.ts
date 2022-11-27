import chalk from 'chalk';
import logSymbols from 'log-symbols';

const success = (msg: string) => {
  console.log();
  console.log(logSymbols.success, chalk.bold.green(`Success! >`), msg);
  console.log();
};

const info = (msg: string) => {
  console.log();
  console.log(logSymbols.info, chalk.bold.blue(`Info >`), msg);
  console.log();
};

const warning = (msg: string) => {
  console.log();
  console.log(logSymbols.warning, chalk.yellow.bold(`Warning >`), msg);
  console.log();
};

const error = (msg: string) => {
  console.log();
  console.log(logSymbols.error, chalk.bold.red(`Error >`), msg);
  console.log();
};

const alert = {
  success,
  info,
  warning,
  error,
};

export default alert;
