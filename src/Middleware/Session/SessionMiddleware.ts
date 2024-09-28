import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../Service/JwtToken";
import { BaseSession } from "../../Types/Session";

const SessionMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const token = request.header('Authorization');

    if (token) {
        const tokenInformations = verifyToken<BaseSession>(token);

        request.session.logged_id = tokenInformations.logged_id;
        request.session.session_type = tokenInformations.session_type;
    }

    next();
};

export default SessionMiddleware;