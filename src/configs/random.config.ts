import { faker } from '@faker-js/faker';

import { RandomConfig as RandomConfigInterface } from '../interfaces';

export class RandomConfig implements RandomConfigInterface {
  public generateRandomPhrase(): string {
    return faker.random.words(3).toLowerCase();
  }
}

export const randomConfig = new RandomConfig();
