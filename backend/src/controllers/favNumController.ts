import { Request, Response } from "express";
import { logsModel } from "../models/logsModel";
import { voteModel } from "../models/voteModel";

const rename = (obj: any) => {
  const { ["_id"]: old, ...others } = obj;
  return { ["title"]: old, ...others };
};

export const statisctic = async (req: Request, res: Response) => {
  try {
    const { date } = req.query;
    if (!date) {
      const docs = await voteModel.aggregate([
        {
          $group: { _id: "$title", value: { $sum: 1 } },
        },
      ]);
      const result = docs.map(rename);
      res.send(result);
    } else {
      const votes = await voteModel.find({ date });
      if (votes.length === 0) {
        throw new Error();
      } else {
        const docs = await voteModel.aggregate([
          { $match: { date: { $eq: date } } },
          {
            $group: { _id: "$title", value: { $sum: 1 } },
          },
        ]);
        const result = docs.map(rename);
        res.send(result);
      }
    }
  } catch (err) {
    res
      .status(404)
      .send("There were no votes on this day, please choose another date");
  }
};

export const vote = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    await new voteModel({ title }).save();
    res.status(201).send({ message: `Vote for ${title} confirmed!` });
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
