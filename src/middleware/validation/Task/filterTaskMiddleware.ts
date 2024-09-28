import { NextFunction, Request, Response } from 'express';
import { FilterTaskBody } from '../../../action/Task/FilterTask';
import { Status } from '../../../entity/taskEntity';
import ValidationException from '../../../exception/validationException';

export const FilterTaskMiddleware = (
    request: Request<any, any, FilterTaskBody>,
    response: Response,
    next: NextFunction
): void => {
    let {
        statuses,
        page,
        page_size: pageSize
    } = request.body;

    if (statuses) {
        const validStatuses: Status[] = ['A', 'E', 'C'];

        const isValid = statuses.every(status => validStatuses.includes(status));

        if (!isValid) {
            throw new ValidationException('O campo status contém valores inválidos');
        }
    }

    if (!page) {
        page = 1;
    }

    if (!pageSize) {
        pageSize = 10;
    }

    request.body = {
        ...request.body,
        page: page,
        page_size: pageSize
    }

    next();
};