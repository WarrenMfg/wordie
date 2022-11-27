#!/usr/bin/env node
import chalk from 'chalk';
import api from './api/index.js';
import alert from './utils/alert.js';
import clear from './utils/clear.js';
import formatAndPrint from './utils/formatAndPrint.js';
import formatWord from './utils/formatWord.js';
import handleUncaughtException from './utils/handleUncaughtException.js';

// handle uncaught exceptions
handleUncaughtException();

/**
 * Init
 */
const init = async () => {
  // clear console
  clear();

  const arg = process.argv[2];

  if (!arg) {
    alert.warning('Please enter a word.');
    return;
  }

  // format argument
  const word = formatWord(arg);

  // get definition
  const definition = await api.getDefinition(word);

  // ensure definition exists
  if (!definition?.defs?.length) {
    alert.warning(
      `Could not find definition for ${chalk.blue.bold(
        `"${word}"`
      )}. Please try a different word.`
    );

    return;
  }

  const synonyms = await api.getSynonyms(word);

  formatAndPrint(word, definition, synonyms);
};

init();
