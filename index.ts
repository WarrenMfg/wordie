#!/usr/bin/env node
import isRunningNodeVersion from './utils/isRunningNodeVersion';
import handleUncaughtException from './utils/handleUncaughtException';
import init from './utils/init';
import clear from './utils/clear';

// handle uncaught exceptions
handleUncaughtException();

// clear console
clear();

// check node version
if (isRunningNodeVersion(14)) {
  // run program
  init(process.argv[2]);
}
