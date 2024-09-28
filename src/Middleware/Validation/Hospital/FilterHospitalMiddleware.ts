import { NextFunction, Request, Response } from 'express';
import { FilterHospitalBody } from '../../../Action/Hospital/FilterHospital';

export const FilterHospitalMiddleware = (
    request: Request<any, any, FilterHospitalBody>,
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