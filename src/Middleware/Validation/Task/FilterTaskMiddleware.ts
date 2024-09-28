import { NextFunction, Request, Response } from 'express';
import { FilterTaskBody } from '../../../Action/Task/FilterTask';
import { CareCategory, Status } from '../../../Entity/TaskEntity';
import ValidationException from '../../../Exception/ValidationException';

export const FilterTaskMiddleware = (
    request: Request<any, any, FilterTaskBody>,
    response: Response,
    next: NextFunction
): void => {
    const {
        statuses,
        care_categories: careCategories,
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

    if (careCategories) {
        const validStatuses: CareCategory[] = [1, 2];

        const isValid = careCategories.every(status => validStatuses.includes(status));

        if (!isValid) {
            throw new ValidationException('O campo categoria contém valores inválidos');
        }
    }

    if (!page) {
        request.body.page = 1;
    }

    if (!pageSize) {
        request.body.page_size = 10;
    }

    next();
};