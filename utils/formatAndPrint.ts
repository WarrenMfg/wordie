import chalk from 'chalk';
import { Definition, Synonym } from '../types/api.types';
import formatWord from './formatWord';

/**
 * Format and print
 */
const formatAndPrint = (
  word: string,
  definition: Definition,
  synonyms: Synonym[]
) => {
  console.log();
  formatAndPrintDefinition(word, definition);
  if (!synonyms.length) return;
  formatAndPrintSynonyms(word, synonyms);
};

/**
 * Format and print definition
 */
const formatAndPrintDefinition = (word: string, definition: Definition) => {
  console.log(chalk.green(`Definition of "${word}"`));

  definition.defs?.forEach(definition => {
    const [pos, def] = definition.split('\t');
    console.log(chalk.italic.dim(pos), def[0].toUpperCase() + def.slice(1));
  });

  console.log();
};

/**
 * Format and print synonyms
 */
const formatAndPrintSynonyms = (word: string, synonyms: Synonym[]) => {
  console.log(chalk.cyan(`Synonyms for "${word}"`));

  let syns = '';
  for (let i = 0; i < synonyms.length; i += 3) {
    syns = synonyms
      .slice(i, i + 3)
      .map(({ word }) => formatWord(word))
      .join(', ');

    // add trailing comma for current line if more synonyms exist
    synonyms[i + 3] && (syns += ', ');

    console.log(syns);
  }

  console.log();
};

export default formatAndPrint;
