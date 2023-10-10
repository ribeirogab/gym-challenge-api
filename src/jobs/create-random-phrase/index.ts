import {
  CreateRandomPhraseJob as CreateRandomPhraseJobInterface,
  PhrasesRepository,
  RandomConfig,
} from '../../interfaces';

export class CreateRandomPhraseJob implements CreateRandomPhraseJobInterface {
  constructor(
    private readonly phrasesRepository: PhrasesRepository,
    private readonly randomConfig: RandomConfig,
  ) {}

  public async execute() {
    const text = this.randomConfig.generateRandomPhrase();

    console.log('[CreateRandomPhraseJob] - Creating random phrase...');

    await this.phrasesRepository.create({ text });

    console.log(`[CreateRandomPhraseJob] - Random phrase created: ${text}`);
  }
}
