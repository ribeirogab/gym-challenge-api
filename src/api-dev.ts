import 'dotenv/config';

import { app } from './app';

const port = Number(process.env.PORT) || 3000;

app
  .listen({ port })
  .then(() => console.log(`Server running on http://localhost:${port}`))
  .catch((error) => {
    app.log.error(error);
    process.exit(1);
  });
