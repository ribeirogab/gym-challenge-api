import Mongoose from 'mongoose';

import { env } from './env.config';

class MongooseConfig {
  get connectionUri() {
    const options = env.MONGODB_URI_OPTIONS
      ? `?${env.MONGODB_URI_OPTIONS}`
      : '';

    return `${env.MONGODB_URL}/${env.MONGODB_DB_NAME}${options}`;
  }

  get connectOptions() {
    const user = env.MONGODB_USER;
    const pass = env.MONGODB_PASSWORD;

    return { user, pass };
  }

  public async connect() {
    if (Mongoose.connection?.readyState !== 1) {
      await Mongoose.connect(this.connectionUri, this.connectOptions);
      console.log('MongoDB | connection has been established successfully');
    } else {
      console.log('MongoDB | connection already exists');
    }
  }

  public async disconnect() {
    if (Mongoose.connection?.readyState === 1) {
      await Mongoose.connection.close();
      console.log('MongoDB | connection was closed successfully');
    }
  }
}

export const mongoose = new MongooseConfig();
