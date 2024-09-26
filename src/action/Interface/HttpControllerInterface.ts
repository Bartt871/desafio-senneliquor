import { Request, Response } from "express";

export type HttpControllerInterface = (request: Request, response: Response) => Promise<void>;