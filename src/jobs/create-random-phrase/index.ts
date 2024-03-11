import {
  CreateRandomPhraseJob as CreateRandomPhraseJobInterface,
  OpenAIConfig,
  PhrasesRepository,
  RandomConfig,
} from '../../interfaces';

export class CreateRandomPhraseJob implements CreateRandomPhraseJobInterface {
  constructor(
    private readonly phrasesRepository: PhrasesRepository,
    private readonly openAIConfig: OpenAIConfig,
    private readonly randomConfig: RandomConfig,
  ) {}

  public async execute() {
    console.log('[CreateRandomPhraseJob] - Creating random phrase...');

    let text = null;

    try {
      text = await this.openAIConfig.generateRandomPhrase();

      let textAlreadyExists = await this.phrasesRepository.getByText(text);

      while (textAlreadyExists) {
        text = await this.openAIConfig.generateRandomPhrase();
        textAlreadyExists = await this.phrasesRepository.getByText(text);
      }
    } catch (error) {
      console.error(
        error.response && error.response.data ? error.response.data : error,
      );
    }

    if (!text) {
      text = this.randomConfig.generateRandomPhrase();
    }

    await this.phrasesRepository.create({ text });

    console.log(`[CreateRandomPhraseJob] - Random phrase created: ${text}`);
  }
}
