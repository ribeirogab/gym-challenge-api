import { Phrase } from '../models/phrase.model';

export interface PhrasesRepository {
  getLast(): Promise<Phrase | null>;
}
