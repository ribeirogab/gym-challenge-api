import { FastifyInstance } from 'fastify';

import { container } from '../container';

export const phraseRoutes = async (app: FastifyInstance) => {
  const { controllers } = container();

  // Get last phrase
  app.get(
    '/last',
    controllers.phraseController.getLastPhrase.bind(
      controllers.phraseController,
    ),
  );
};
