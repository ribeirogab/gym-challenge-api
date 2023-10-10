import { FastifyInstance } from 'fastify';

import { phraseRoutes } from './phrase.routes';

export const routes = async (app: FastifyInstance) => {
  app.register(phraseRoutes, { prefix: 'phrases' });
};
