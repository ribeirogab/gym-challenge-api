import { createRandomPhraseJob } from './create-random-phrase.job';

export const handler = async (event: unknown) => {
  console.log(event);

  return createRandomPhraseJob();
};
