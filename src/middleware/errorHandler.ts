import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger.js";

interface HttpError extends Error {
  status?: number;
}

export function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction): void {
  const status = err.status || 500;

  logger.error(`${status} - ${err.message} - ${req.method} ${req.originalUrl}`, {
    stack: err.stack,
  });

  res.status(status).json({
    error: status === 500 ? "Error interno del servidor" : err.message,
  });
}