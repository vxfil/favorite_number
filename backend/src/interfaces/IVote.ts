import { Document } from 'mongoose';

export interface IVote extends Document {
  number: string;
  value: number;
  createdAt: Date;
}
