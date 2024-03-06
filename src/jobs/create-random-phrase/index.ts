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
    let text = await this.openAIConfig.generateRandomPhrase();

    console.log('[CreateRandomPhraseJob] - Creating random phrase...');

    let textAlreadyExists = await this.phrasesRepository.getByText(text);

    while (textAlreadyExists) {
      text = await this.openAIConfig.generateRandomPhrase();
      textAlreadyExists = await this.phrasesRepository.getByText(text);
    }

    await this.phrasesRepository.create({ text });

    console.log(`[CreateRandomPhraseJob] - Random phrase created: ${text}`);
  }
}
