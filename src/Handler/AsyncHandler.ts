import { Response, NextFunction, Request } from 'express';
import { HttpControllerInterface } from '../Action/Interface/HttpControllerInterface';

const asyncHandler =
    <P = null>(action: HttpControllerInterface<P>) =>
        (request: Request, response: Response, next: NextFunction) =>
            Promise.resolve(action(request, response, next)).catch(next);

export default asyncHandler;