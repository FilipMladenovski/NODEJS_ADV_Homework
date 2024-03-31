import { Router } from "express";
import { PostController } from "../controllers/postController.js";

export const postRouter = Router();

postRouter.get("/", PostController.getAllPosts);
postRouter.get("/:id", PostController.getPostById);
postRouter.post("/", PostController.createPost);
postRouter.put("/:id", PostController.updatePost);
postRouter.delete("/:id", PostController.deletePost);