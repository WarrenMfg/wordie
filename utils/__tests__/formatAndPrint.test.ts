import { Definition, Synonym } from '../../types/api.types';
import formatAndPrint from '../formatAndPrint';

describe('formatAndPrint', () => {
  /**
   * Data
   */
  let log: jest.Mock;
  const word = 'test';
  const definition: Definition = {
    score: 1,
    tags: ['tag'],
    word,
    defs: [
      'n\tany standardized procedure for measuring sensitivity or memory or intelligence or aptitude or personality etc',
    ],
  };
  let synonyms: Synonym[];

  beforeEach(() => {
    log = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(log);

    synonyms = [
      {
        score: 4,
        word: 'check',
      },
      {
        score: 3,
        word: 'trial',
      },
      {
        score: 2,
        word: 'exam',
      },
      {
        score: 1,
        word: 'quiz',
      },
    ];
  });

  it('should formatAndPrint definition only', () => {
    expect.hasAssertions();

    synonyms = [];

    formatAndPrint(word, definition, synonyms);
    expect(log).toHaveBeenCalledTimes(4);
  });

  it('should formatAndPrint definition and synonyms', () => {
    expect.hasAssertions();

    formatAndPrint(word, definition, synonyms);
    expect(log).toHaveBeenCalledTimes(8);
  });
});
