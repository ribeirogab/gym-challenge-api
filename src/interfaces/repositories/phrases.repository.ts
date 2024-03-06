import { Phrase } from '../../interfaces';

export interface PhrasesRepository {
  getLast(): Promise<Phrase | null>;
  getByText(text: string): Promise<Phrase | null>;
  create(phrase: Phrase): Promise<void>;
}
