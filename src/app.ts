import express, { Request, Response, json, Express } from 'express';
import cors from 'cors';
import { connectDb, disconnectDB } from './config/database';
import { loadEnv } from './config/envs';
import dotenv from 'dotenv';

loadEnv();
//dotenv.config()

const app = express();
app
  .use(json())
  .use(cors())
  .get('/', (req, res) => {
    res.send('Florence Backend API is running!');
  })
  .get('/health', async (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', database: 'connected' });
  })

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
