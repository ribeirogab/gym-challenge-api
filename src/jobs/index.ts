import { JobsEnum } from '../constants/jobs.constants';
import { container } from './container';

export const handler = async ({ job: jobName }: { job: JobsEnum }) => {
  return container({ job: jobName }).job().execute;
};
