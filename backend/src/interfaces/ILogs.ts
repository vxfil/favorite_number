import { Document } from 'mongoose';

export interface ILogs extends Document {
  date: Date;
  url: string;
  json: String;
}
