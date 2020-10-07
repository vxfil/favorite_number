import { Request, Response } from 'express';
import { logsModel } from '../models/logsModel';
import { voteModel } from '../models/voteModel';

export const statisctic = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const { date } = req.query;
    if (!date) {
      const votes = await voteModel.find();
      res.send(votes);
    } else {
      const votes = await voteModel.find({ date });
      if (votes.length === 0) {
        throw new Error();
      }
      res.send(votes);
    }
  } catch (err) {
    res
      .status(404)
      .send('There were no votes on this day, please choose another date');
  }
};

export const vote = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const num = await voteModel.findOne({ title });
    if (!num) {
      await new voteModel({ title }).save();
      res.status(201).send({ message: `Vote for ${title} confirmed!` });
    } else {
      await num?.updateOne({ value: num.value += 1 });
      res.status(202).send({ message: `Vote for ${title} confirmed!` });
    }
  } catch (err) {
    console.error(err);
  }
};

export const logs = async (req: Request, res: Response) => {
  try {
    const logs = await logsModel.find();
    res.send(logs);
  } catch (err) {
    console.error(err);
  }
};
