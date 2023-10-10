import { mongoose, randomConfig } from '../../configs';
import { PhrasesRepository } from '../../repositories';
import { CreateRandomPhraseJob } from './index';

export const createRandomPhraseJobContainer = async () => {
  if (!mongoose.isConnected) {
    await mongoose.connect();
  }

  const phrasesRepository = new PhrasesRepository();

  return new CreateRandomPhraseJob(phrasesRepository, randomConfig);
};
