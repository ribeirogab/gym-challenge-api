import mongoose, { Document, Schema } from 'mongoose';

import { Phrase } from '../interfaces';

export interface PhraseMongoose extends Document, Phrase {}

const schema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const PhraseModel = mongoose.model<PhraseMongoose>('phrases', schema);
