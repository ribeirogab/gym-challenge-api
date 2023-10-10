import { Phrase } from '../../interfaces';

export interface PhrasesRepository {
  getLast(): Promise<Phrase | null>;
  create(phrase: Phrase): Promise<void>;
}
