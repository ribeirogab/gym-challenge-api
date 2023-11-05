import { Configuration, OpenAIApi } from 'openai';

import { OpenAIConfig as OpenAIConfigInterface } from '../interfaces';
import { env } from './env.config';

enum Roles {
  Assistant = 'assistant',
  System = 'system',
  User = 'user',
}

type Message = {
  content: string;
  role: Roles;
};

export class OpenAIConfig implements OpenAIConfigInterface {
  private readonly model: string = 'gpt-3.5-turbo' as const;
  private readonly api: OpenAIApi;

  constructor() {
    this.api = new OpenAIApi(
      new Configuration({
        apiKey: env.OPENAI_API_KEY,
      }),
    );
  }

  public async generateRandomPhrase(): Promise<string> {
    const text = 'Gere uma frase.';

    const prompts: Message[] = [
      {
        role: Roles.System,
        content: 'Você será responsável por gerar uma frase aleatória.',
      },
      {
        role: Roles.System,
        content: 'A frase deve conter no máximo 4 palavras.',
      },
      {
        role: Roles.System,
        content:
          'A frase não deve conter aspas, exemplo ERRADO: "amo meu cachorro", exemplo CORRETO: amo meu cachorro.',
      },
      {
        role: Roles.User,
        content: text,
      },
    ];

    const chatCompletion = await this.api.createChatCompletion({
      model: this.model,
      messages: prompts,
      n: 1,
    });

    const responses = chatCompletion.data.choices
      .map((choice) => choice.message.content)
      .filter((response) => !!response);

    const formattedPhrase = responses[0].replace(/["]/g, '');

    return formattedPhrase;
  }
}

export const openAIConfig = new OpenAIConfig();
