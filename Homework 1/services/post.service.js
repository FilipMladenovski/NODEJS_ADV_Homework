import Post from '../models/Post.js';

export class PostService {
  static getAllPosts({ author }) {
    let searchQuery = {};
    if (author) {
      searchQuery.author = author;
    }
    return Post.find(searchQuery);
  }
	static getPostById(postId) {
		return Post.findById(postId);
	}

	static createPost(postData) {
		const post = new Post(postData);
		return post.save();
	}

	static updatePost(postId, updateData) {
		return Post.findByIdAndUpdate(postId, updateData, { new: true });
	}

	static deletePost(postId) {
		return Post.findByIdAndDelete(postId);
	}
}