import {
  CreateRandomPhraseJob as CreateRandomPhraseJobInterface,
  OpenAIConfig,
  PhrasesRepository,
} from '../../interfaces';

export class CreateRandomPhraseJob implements CreateRandomPhraseJobInterface {
  constructor(
    private readonly phrasesRepository: PhrasesRepository,
    private readonly openAIConfig: OpenAIConfig,
  ) {}

  public async execute() {
    const text = await this.openAIConfig.generateRandomPhrase();

    console.log('[CreateRandomPhraseJob] - Creating random phrase...');

    await this.phrasesRepository.create({ text });

    console.log(`[CreateRandomPhraseJob] - Random phrase created: ${text}`);
  }
}
