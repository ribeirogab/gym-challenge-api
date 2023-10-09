import { awsLambdaFastify } from '@fastify/aws-lambda';

import { app } from './app';

const proxy = awsLambdaFastify(app);

export const handler = async (event: unknown, context: unknown) =>
  proxy(event, context);
