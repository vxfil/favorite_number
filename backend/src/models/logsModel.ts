import { model } from 'mongoose';
import { logsSchema } from '../schemas/logsSchema';
import { ILogs } from '../interfaces/ILogs';

export const logsModel = model<ILogs>('Logs', logsSchema);
