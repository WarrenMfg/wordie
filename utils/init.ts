import chalk from 'chalk';
import api from '../api';
import alert from './alert';
import formatAndPrint from './formatAndPrint';
import formatWord from './formatWord';

/**
 * Init
 */
const init = async (arg?: string) => {
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

export default init;
