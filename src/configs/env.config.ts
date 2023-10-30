import { get } from 'env-var';

export const env = {
  MONGODB_DB_NAME: get('MONGODB_DB_NAME').required().asString(),
  MONGODB_URI_OPTIONS: get('MONGODB_URI_OPTIONS').asString(),
  MONGODB_URL: get('MONGODB_URL').required().asString(),
  MONGODB_USER: get('MONGODB_USER').required().asString(),
  MONGODB_PASSWORD: get('MONGODB_PASSWORD').required().asString(),

  OPENAI_API_KEY: get('OPENAI_API_KEY').required().asString(),
};
