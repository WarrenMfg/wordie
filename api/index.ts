import axios from 'axios';
import { Definition, Synonym } from '../types/api.types';

const http = axios.create({
  baseURL: 'https://api.datamuse.com',
});

/**
 * Get definition
 */
const getDefinition = async (word: string): Promise<Definition | undefined> => {
  const query = {
    sp: word, // spelled like
    qe: 'sp', // query echo
    md: 'dpr', // metadata (definition, parts of speech, pronounciation)
    max: '1', // max results
  };

  const params = new URLSearchParams(query);

  const { data } = await http.get<Definition[]>(`/words?${params.toString()}`);

  return data[0];
};

/**
 * Get synonyms
 */
const getSynonyms = async (word: string) => {
  const query = {
    rel_syn: word, // synonyms
  };

  const params = new URLSearchParams(query);

  const { data } = await http.get<Synonym[]>(`/words?${params.toString()}`);

  return data;
};

const api = {
  getDefinition,
  getSynonyms,
};

export default api;
