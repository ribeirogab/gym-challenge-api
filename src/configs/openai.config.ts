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
    let count = 0;
    let randomPhrase = null;
    let randomWorlds = true;

    while (count < 3) {
      const formattedPhrase = await this.getFormattedPhrase({
        randomWorlds,
      });

      if (formattedPhrase.split(' ').length <= 4) {
        randomPhrase = formattedPhrase;

        break;
      }

      count++;

      await new Promise((resolve) => setTimeout(resolve, 6000));

      if (count === 2) {
        randomWorlds = false;
      }
    }

    return randomPhrase;
  }

  async getFormattedPhrase({ randomWorlds = true }) {
    const text = 'Gere uma frase.';
    const wordsMustContain = [
      'Gabriel',
      'Theus',
      'Nub',
      'Quel',
      'Thiago',
      'pé',
      'preto',
      'verde',
      'amarelo',
      'roxo',
      'cansado',
      'xaos',
      'inxu',
      'grosso',
      'molhado',
      'aberto',
      'peludo',
      'casquento',
      'sujo',
      'fedido',
      'duro',
      'comprido',
      'grosso',
      'largo',
      'grande',
    ];

    const randomWorld =
      wordsMustContain[Math.floor(Math.random() * wordsMustContain.length)];
    const otherRandomWorld =
      wordsMustContain[Math.floor(Math.random() * wordsMustContain.length)];

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
        content: randomWorlds
          ? `A frase deve conter as palavras: ${randomWorld} e ${otherRandomWorld}.`
          : '',
      },
      {
        role: Roles.System,
        content: 'A frase não deve conter pontuação.',
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
