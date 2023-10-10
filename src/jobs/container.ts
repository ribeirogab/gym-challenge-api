import { JobsEnum } from '../constants/jobs.constants';
import { createRandomPhraseJobContainer } from './create-random-phrase/container';

type Container = {
  job: JobsEnum;
};

type Jobs = {
  [key in JobsEnum]: () => Promise<{ execute: () => Promise<void> }>;
};

export const container = ({ job }: Container) => {
  const jobs: Jobs = {
    [JobsEnum.CreateRandomPhrase]: createRandomPhraseJobContainer,
  };

  return { jobContainer: jobs[job] };
};
