import { Request, Response, NextFunction } from "express";

// Middleware de logging des requêtes
const logger = (req: Request, res: Response, next: NextFunction): void => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
};

export default logger;
