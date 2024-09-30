import jwt from 'jsonwebtoken';
import AuthorizationException from '../Exception/AuthorizationException';

export const generateToken = (params: string | Buffer | object, options?: jwt.SignOptions) => {
    return jwt.sign(params, process.env.JWT_SECRET ?? 'Devel', options);
};

export const verifyToken = <T>(token: string): T => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET ?? 'Devel') as T;
    } catch (e) {
        throw AuthorizationException.TOKEN_VERIFY_FAILED;
    }
}