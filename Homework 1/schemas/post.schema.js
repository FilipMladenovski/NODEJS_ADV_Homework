import joi from 'joi';

export const postSchema = joi.object({
  title: joi.string().min(3).max(30).required(),
  content: joi.string().min(3).max(100).required(),
  author: joi.string().min(3).max(30).required(),
  createdAt: joi.date().default(new Date()),
  updatedAt: joi.date().default(new Date()),
});
