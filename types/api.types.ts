export interface Definition {
  word: string;
  score: number;
  tags: string[];
  defs?: string[];
}

export interface Synonym {
  word: string;
  score: number;
}
