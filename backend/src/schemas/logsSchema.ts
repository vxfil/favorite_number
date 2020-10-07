import { Schema } from 'mongoose';

export const logsSchema = new Schema({
  date: { type: Date, required: true },
  url: { type: String, required: true },
  json: { type: String },
});
