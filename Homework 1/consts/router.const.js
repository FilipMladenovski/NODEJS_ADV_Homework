import { Router } from 'express';
import { postRouter } from '../routes/postRoutes.js';

export const globalRouter = Router();

globalRouter.use('/post', postRouter);