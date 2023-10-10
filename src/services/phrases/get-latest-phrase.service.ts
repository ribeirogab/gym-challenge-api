import type {
  GetLastPhraseService as GetLastPhraseServiceInterface,
  Phrase,
  PhrasesRepository,
} from '../../interfaces';

export class GetLastPhraseService implements GetLastPhraseServiceInterface {
  constructor(private readonly phrasesRepository: PhrasesRepository) {}

  public async execute(): Promise<Phrase | null> {
    const phrase = await this.phrasesRepository.getLast();

    return phrase;
  }
}
