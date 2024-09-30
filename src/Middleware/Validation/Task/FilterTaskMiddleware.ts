import { NextFunction, Request, Response } from 'express';
import { FilterTaskBody } from '../../../Action/Task/FilterTask';
import { CareCategory, Status } from '../../../Entity/TaskEntity';
import ValidationException from '../../../Exception/ValidationException';

export const FilterTaskMiddleware = (
    request: Request<any, any, any, FilterTaskBody>,
    response: Response,
    next: NextFunction
): void => {
    const params = request.query;

    if (params.statuses) {
        const validStatuses: Status[] = ['A', 'E', 'C'];

        const isValid = params.statuses.every(status => validStatuses.includes(status));

        if (!isValid) {
            throw new ValidationException('O campo status contém valores inválidos');
        }
    }

    if (params.care_categories) {
        const validStatuses: CareCategory[] = [1, 2];

        const isValid = params.care_categories.every(status => validStatuses.includes(status));

        if (!isValid) {
            throw new ValidationException('O campo categoria contém valores inválidos');
        }
    }

    params.page = params.page || 1;
    params.page_size = params.page_size || 10;
    
    request.body = params;

    next();
};