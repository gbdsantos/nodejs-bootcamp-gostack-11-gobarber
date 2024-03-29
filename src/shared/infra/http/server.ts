import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';

import 'express-async-errors';

import '@shared/infra/typeorm';
import '@shared/container';

import AppError from '@shared/errors/AppError';
import routes from './routes';
import uploadConfig from '@config/upload';

import '@shared/infra/typeorm';

// Middlewares Imports
import cors from 'cors';
import rateLimiter from './middlewares/rateLimiter';

const app = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(rateLimiter);
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server has started on port 3333!');
});
