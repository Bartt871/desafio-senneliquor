import { NextFunction, Request, Response } from 'express';
import { FilterDoctorBody } from '../../../Action/Doctor/FilterDoctor';

export const FilterDoctorMiddleware = (
    request: Request<any, any, FilterDoctorBody>,
    response: Response,
    next: NextFunction
): void => {
    const { page, page_size: pageSize } = request.body;

    if (!page) {
        request.body.page = 1;
    }

    if (!pageSize) {
        request.body.page_size = 10;
    }

    next();
};