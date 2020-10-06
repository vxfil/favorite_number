import express from 'express';
import * as favNumController from '../controllers/favNumController';

const favNumRouter = express.Router();

favNumRouter.post('/statistic', favNumController.statisctic);

export default favNumRouter;
