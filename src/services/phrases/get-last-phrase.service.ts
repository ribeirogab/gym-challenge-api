import type {
  GetLastPhraseService as GetLastPhraseServiceInterface,
  Phrase,
} from '../../interfaces';

export class GetLastPhraseService implements GetLastPhraseServiceInterface {
  public async execute(): Promise<Phrase | null> {
    return { text: 'text' };
  }
}
