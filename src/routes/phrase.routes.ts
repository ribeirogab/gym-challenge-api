import { FastifyInstance } from 'fastify';

import { container } from '../container';

export const phraseRoutes = async (app: FastifyInstance) => {
  const { controllers } = await container();

  // Get last phrase
  app.get(
    '/latest',
    controllers.phraseController.getLastPhrase.bind(
      controllers.phraseController,
    ),
  );
};
