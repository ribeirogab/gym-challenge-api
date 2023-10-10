import Mongoose from 'mongoose';

import { env } from './env.config';

class MongooseConfig {
  public isConnected = false;

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

      console.log(
        '[MongooseConfig] - Connection has been established successfully',
      );

      this.isConnected = true;
    } else {
      console.log('[MongooseConfig] - Connection already exists');
    }
  }

  public async disconnect() {
    if (Mongoose.connection?.readyState === 1) {
      await Mongoose.connection.close();
      this.isConnected = false;
      console.log('[MongooseConfig] - Connection was closed successfully');
    }
  }
}

export const mongoose = new MongooseConfig();
