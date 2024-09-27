import jwt from 'jsonwebtoken';
import AuthorizationException from '../exception/authorizationException';

export const generateToken = (params: string | Buffer | object, options: jwt.SignOptions) => {
    return jwt.sign(params, process.env.JWT_SECRET ?? 'Devel', options);
};

export const verifyToken = <T>(token: string): T => {
    const processedToken = jwt.verify(token, process.env.JWT_SECRET ?? 'Devel') as T;

    if (!processedToken) {
        throw AuthorizationException.TOKEN_VERIFY_FAILED;
    }

    return processedToken;
}