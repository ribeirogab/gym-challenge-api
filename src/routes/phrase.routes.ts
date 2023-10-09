import { FastifyInstance } from 'fastify';

import { container } from '../container';

export const phraseRoutes = async (app: FastifyInstance) => {
  const { controllers } = container();

  // List last phrase
  app.get('/', controllers.phraseController.getLastPhrase);
};
