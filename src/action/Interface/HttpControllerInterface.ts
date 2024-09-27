import { NextFunction, Request, Response } from "express";

export type HttpControllerInterface = (request: Request, response: Response, next: NextFunction) => Promise<void>;