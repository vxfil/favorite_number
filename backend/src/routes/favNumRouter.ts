import express from 'express';
import * as favNumController from '../controllers/favNumController';

const favNumRouter = express.Router();

favNumRouter.get('/statistic', favNumController.statisctic);
favNumRouter.post('/vote', favNumController.vote);
favNumRouter.get('/logs', favNumController.logs);

export default favNumRouter;
