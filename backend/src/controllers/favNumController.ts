import express, { Request, Response } from 'express';

export const statisctic = async (req: Request, res: Response) => {
  console.log(req.body);
};
