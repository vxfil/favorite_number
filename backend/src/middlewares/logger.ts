import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
import { logsModel } from '../models/logsModel';

export default async (req: Request, res: Response, next: NextFunction) => {
  const date = moment().format('DD-MM-YYYY hh:mm');
  const url = req.url;
  const json =
    Object.keys(req.query).length === 0
      ? JSON.stringify(req.body)
      : JSON.stringify(req.query);

  const log = `${date} ${url} ${json}`;
  await new logsModel({
    date,
    url,
    json,
  }).save();
  console.log(log);
  next();
};
