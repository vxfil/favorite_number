import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import favNumRouter from './routes/favNumRouter';

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const DBASE = process.env.DBASE;

app.use(cors());

mongoose.connect(`${DBASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/', favNumRouter);

app.listen(PORT, () => console.log(`app is listening on the port ${PORT}`));
