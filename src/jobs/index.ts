import { JobsEnum } from '../constants/jobs.constants';
import { container } from './container';

export const handler = async ({ job: jobName }: { job: JobsEnum }) => {
  const job = await container({ job: jobName }).jobContainer();

  return job.execute();
};
