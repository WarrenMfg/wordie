#!/usr/bin/env node
import handleUncaughtException from './utils/handleUncaughtException';
import init from './utils/init';

// handle uncaught exceptions
handleUncaughtException();

// run program
init(process.argv[2]);
