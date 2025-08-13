import express from 'express';
import dotenv from 'dotenv';
import prisma from './infrastructure/database/prisma';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Florence Backend API is running!');
});

app.get('/health', async (req, res) => {
  try {
    await prisma.$connect();
    res.status(200).json({ status: 'ok', database: 'connected' });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ status: 'error', database: 'disconnected', message: (error instanceof Error) ? error.message : 'Unknown error' });
  } finally {
    await prisma.$disconnect();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access it at http://localhost:${PORT}`);
});


