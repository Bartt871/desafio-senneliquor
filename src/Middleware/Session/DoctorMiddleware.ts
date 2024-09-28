import { NextFunction, Request, Response } from "express";
import AuthorizationException from "../../Exception/AuthorizationException";

const DoctorMiddleware = (request: Request, response: Response, next: NextFunction) => {
    if (
        !request.session.logged_id ||
        request.session.session_type !== 'doctor'
    ) {
        throw AuthorizationException.INVALID_TOKEN_FROM_REQUEST;
    }

    next();
};

export default DoctorMiddleware;