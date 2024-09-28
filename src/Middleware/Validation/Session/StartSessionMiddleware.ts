import { NextFunction, Request, Response } from 'express';
import { StartSessionBody } from '../../../Action/Session/StartSession';

import validator from 'validator';
import ValidationException from '../../../Exception/ValidationException';

export const StartSessionMiddleware = (
    request: Request<any, any, StartSessionBody>,
    response: Response,
    next: NextFunction
): void => {
    const { username, password } = request.body;

    if (!username) {
        throw new ValidationException('username é obrigatório');
    }

    if (!password) {
        throw new ValidationException('password é obrigatório');
    }

    if (!validator.isLength(username, { min: 6 })) {
        throw new ValidationException('O usuário precisa ter ao menos 6 caracteres');
    }

    if (!validator.isLength(password, { min: 8 })) {
        throw new ValidationException('A senha deve ter pelo menos 8 caracteres.');
    }

    next();
};