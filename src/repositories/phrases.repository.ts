import {
  Phrase,
  PhrasesRepository as PhrasesRepositoryInterface,
} from '../interfaces';
import { PhraseModel } from '../models';

export class PhrasesRepository implements PhrasesRepositoryInterface {
  private readonly mongooseRepository: typeof PhraseModel;

  constructor() {
    this.mongooseRepository = PhraseModel;
  }

  public async getLast(): Promise<Phrase | null> {
    const [phrase = null] = await this.mongooseRepository.find().limit(1);

    return phrase;
  }

  public async create(phrase: Phrase): Promise<void> {
    await this.mongooseRepository.create(phrase);
  }
}
