
import { postSchema } from '../schemas/post.schema.js';
import { PostService } from '../services/post.service.js';

export class PostController {
	static async getAllPosts(req, res) {
		try {
			const posts = await PostService.getAllPosts(req.query);

			res.status(200).json(posts);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}

	static async getPostById(req, res) {
		try {
			const foundPost = await PostService.getPostById(req.params.id);

			res.json(foundPost);
		} catch (error) {
			res.status(404).json({ msg: error.message });
		}
	}

	static async createPost(req, res) {
		try {
			const postData = req.body;
			await postSchema.validateAsync(postData, {
				abortEarly: false,
			});
			const newPost = await PostService.createPost(postData);
			res.status(201).json(newPost);
		} catch (error) {
			res.status(400).json({ msg: error.message });
		}
	}

	static async updatePost(req, res) {
		try {
			const updateData = req.body;

			await postSchema.validateAsync(updateData, {
				abortEarly: false,
			});

			const response = await PostService.updatePost(
				req.params.id,
				updateData
			);

			res.json(response);
		} catch (error) {
			res.status(400).json({ msg: error.message });
		}
	}

	static async deletePost(req, res) {
		try {
			await PostService.deletePos(req.params.id);

			res.sendStatus(204);
		} catch (error) {
			res.status(404).json({ msg: error.message });
		}
	}
}
