/**
 * Format input string
 */
const formatWord = (word: string) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();

export default formatWord;
