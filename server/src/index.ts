import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import { PORT, MONGODB_URL } from "./utils/config.utils";
import { connectToDatabase } from "./services/mongodb.service";
import logger from "./middlewares/logger.middleware";
import { postRoutes } from "./routes/post.route";

// Configuration du fichier .env
config();

// Initialisation de l'application Express
const app = express();

// Configuration de CORS
app.use(cors());

// Utilisation du middleware de logging
app.use(logger);

// Configuration de body-parser pour analyser les données JSON dans le corps des requêtes
app.use(bodyParser.json());

(async () => {
  await connectToDatabase(MONGODB_URL);

  // Configuration des routes
  postRoutes(app);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
