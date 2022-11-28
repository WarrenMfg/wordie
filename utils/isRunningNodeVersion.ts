import logSymbols from 'log-symbols';
import chalk from 'chalk';

/**
 * Check for a node version and exit if condition is not met
 */
const isRunningNodeVersion = (requiredMajorVersion: number, exitCode = 1) => {
  const curMajorVersion = +process.versions.node.split('.')[0];

  if (curMajorVersion < requiredMajorVersion) {
    const msg = `
${logSymbols.error} ${chalk.red(`Node version issue!`)}

You are running Node version ${chalk.red(process.versions.node)}.
Required version of Node is ${chalk.green(requiredMajorVersion, 'or higher')}.

${logSymbols.info} Please update your version of Node.js to run this program:
${logSymbols.info} https://nodejs.org/en/download
`;

    if (exitCode) {
      console.log(msg);
      process.exitCode = exitCode;
    }

    return false;
  }

  return true;
};

export default isRunningNodeVersion;
