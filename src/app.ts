import Fastify from 'fastify';

const app = Fastify();

app.get('/test', async (_request, _reply) => {
  return { msg: 'Hello! from Fastify!' };
});

app.post('/test', async (request, _reply) => {
  const body = request.body;

  return { msg: 'Fastify received your post request!', body };
});

export { app };
