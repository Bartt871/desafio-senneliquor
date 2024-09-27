import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";

export type HttpControllerInterface<P = null> = (
    request: Request<ParamsDictionary, any, P>,
    response: Response,
    next: NextFunction
) => Promise<void>;