import chalk from 'chalk';
import { Definition, Synonym } from '../types/api.types';
import formatWord from './formatWord.js';

const log = console.log;

/**
 * Format and print
 */
const formatAndPrint = (
  word: string,
  definition: Definition,
  synonyms: Synonym[]
) => {
  log();
  formatAndPrintDefinition(word, definition);
  if (!synonyms.length) return;
  formatAndPrintSynonyms(word, synonyms);
};

/**
 * Format and print definition
 */
const formatAndPrintDefinition = (word: string, definition: Definition) => {
  log(chalk.green(`Definition of "${word}"`));

  definition.defs?.forEach(definition => {
    const [pos, def] = definition.split('\t');
    log(chalk.italic.dim(pos), def[0].toUpperCase() + def.slice(1));
  });

  log();
};

/**
 * Format and print synonyms
 */
const formatAndPrintSynonyms = (word: string, synonyms: Synonym[]) => {
  log(chalk.cyan(`Synonyms for "${word}"`));

  let syns = '';
  for (let i = 0; i < synonyms.length; i += 3) {
    syns = synonyms
      .slice(i, i + 3)
      .map(({ word }) => formatWord(word))
      .join(', ');

    // add trailing comma for current line if more synonyms exist
    synonyms[i + 3] && (syns += ', ');

    log(syns);
  }

  log();
};

export default formatAndPrint;
