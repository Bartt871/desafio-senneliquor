import ExceptionHanlder from "../handler/ExceptionHanlder";

export default class AuthorizationException extends ExceptionHanlder {
    static TOKEN_VERIFY_FAILED = new AuthorizationException("Falha ao validar o token");

    private constructor(public message: string) {
        super(message);
    }

    public getStatus(): number {
        return 401;
    }
}