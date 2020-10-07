import { model } from 'mongoose';
import { voteSchema } from '../schemas/voteSchema';
import { IVote } from '../interfaces/IVote';

export const voteModel = model<IVote>('Vote', voteSchema);
