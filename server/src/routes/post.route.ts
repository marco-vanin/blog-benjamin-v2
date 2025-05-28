import { Express } from "express-serve-static-core";
import PostController from "../controllers/post.controller";

export function postRoutes(app: Express) {
  // Récupérer tous les posts
  app.get("/posts", PostController.getAllPosts);

  // Récupérer un post par ID
  app.get("/posts/:id", PostController.getPostById);

  // Créer un post
  app.post("/posts", PostController.createPost);

  // Mettre à jour un post
  app.put("/posts/:id", PostController.updatePost);

  // Supprimer un post
  app.delete("/posts/:id", PostController.deletePost);
}
