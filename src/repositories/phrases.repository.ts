import {
  Phrase,
  PhrasesRepository as PhrasesRepositoryInterface,
} from '../interfaces';

export class PhrasesRepository implements PhrasesRepositoryInterface {
  public async getLast(): Promise<Phrase | null> {
    return null;
  }
}
