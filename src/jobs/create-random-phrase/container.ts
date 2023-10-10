import { randomConfig } from '../../configs';
import { PhrasesRepository } from '../../repositories';
import { CreateRandomPhraseJob } from './index';

export const createRandomPhraseJobContainer = () => {
  const phrasesRepository = new PhrasesRepository();

  return new CreateRandomPhraseJob(phrasesRepository, randomConfig);
};
