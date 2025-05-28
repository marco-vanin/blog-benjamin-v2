import PostModel from "../models/post.model";
import { IPost } from "../types/post";

class PostService {
  // Récupère tous les articles
  async getAllPosts(): Promise<IPost[]> {
    const posts: IPost[] = await PostModel.find();
    return posts;
  }

  // Récupère un article par son ID
  async getPostById(postId: string): Promise<IPost> {
    const post: IPost | null = await PostModel.findById(postId);
    if (!post) throw new Error("Post not found");
    return post;
  }

  // Crée un nouvel article
  async createPost(data: IPost): Promise<IPost> {
    const newPost = await PostModel.create(data);
    return newPost;
  }

  // Met à jour un article
  async updatePost(postId: string, data: Partial<IPost>): Promise<IPost> {
    const updatedPost = await PostModel.findByIdAndUpdate(postId, data, {
      new: true,
    });
    if (!updatedPost) throw new Error("Post not found");
    return updatedPost;
  }

  // Supprime un article
  async deletePost(postId: string): Promise<void> {
    const deleted = await PostModel.findByIdAndDelete(postId);
    if (!deleted) throw new Error("Post not found");
  }
}

export default new PostService();
