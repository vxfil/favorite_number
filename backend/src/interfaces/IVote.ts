import { Document } from "mongoose";

export interface IVote extends Document {
  title: string;
  createdAt: Date;
}
