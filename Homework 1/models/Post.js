import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: 3,
      maxlength: 30,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      minlength: 3,
      maxlength: 100,
    },
    author: {
      type: String,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model('Post', postSchema);

export default Post;
