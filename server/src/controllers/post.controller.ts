import { Request, Response } from "express";
import PostService from "../services/post.service";

class PostController {
  // Récupérer tous les posts
  async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await PostService.getAllPosts();
      res.send(posts);
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }

  // Récupérer un post par ID
  async getPostById(req: Request, res: Response): Promise<void> {
    try {
      const post = await PostService.getPostById(req.params.id);
      res.send(post);
    } catch (error) {
      res.status(404).send({ message: "Post not found" });
    }
  }

  // Créer un nouveau post
  async createPost(req: Request, res: Response): Promise<void> {
    try {
      const newPost = await PostService.createPost(req.body);
      res.status(201).send(newPost);
    } catch (error) {
      res.status(400).send({ message: "Invalid post data" });
    }
  }

  // Mettre à jour un post existant
  async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await PostService.updatePost(req.params.id, req.body);
      res.send(updatedPost);
    } catch (error) {
      res.status(404).send({ message: "Post not found" });
    }
  }

  // Supprimer un post
  async deletePost(req: Request, res: Response): Promise<void> {
    try {
      await PostService.deletePost(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).send({ message: "Post not found" });
    }
  }
}

export default new PostController();
