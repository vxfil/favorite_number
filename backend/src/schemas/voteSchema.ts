import { Schema } from 'mongoose';
import moment from 'moment';

export const voteSchema = new Schema({
  title: { type: String, required: true },
  value: { type: Number, default: 1 },
  date: { type: String, default: moment().format('DD-MM-YYYY') },
});
