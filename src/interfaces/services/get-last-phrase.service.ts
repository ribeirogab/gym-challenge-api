import { Phrase } from '../models/phrase.model';

export interface GetLastPhraseService {
  execute(): Promise<Phrase | null>;
}
