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
    const phrase = await this.mongooseRepository
      .findOne({})
      .sort({ createdAt: -1 });

    return phrase;
  }

  public async getByText(text: string): Promise<Phrase | null> {
    const phrase = await this.mongooseRepository.findOne({ text });

    return phrase;
  }

  public async create(phrase: Phrase): Promise<void> {
    await this.mongooseRepository.create(phrase);
  }
}
