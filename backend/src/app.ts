import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import favNumRouter from './routes/favNumRouter';
import logger from './middlewares/logger';

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const DBASE = process.env.DBASE;

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

mongoose.connect(`${DBASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/', favNumRouter);

app.listen(PORT, () => console.log(`app is listening on the port ${PORT}`));
