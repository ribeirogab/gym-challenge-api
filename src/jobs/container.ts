import { JobsEnum } from '../constants/jobs.constants';
import { createRandomPhraseJobContainer } from './create-random-phrase/container';

type Container = {
  job: JobsEnum;
};

type Jobs = {
  [key in JobsEnum]: () => { execute: () => Promise<void> };
};

export const container = ({ job }: Container) => {
  const jobs: Jobs = {
    [JobsEnum.CreateRandomPhrase]: createRandomPhraseJobContainer,
  };

  return { job: jobs[job] };
};
