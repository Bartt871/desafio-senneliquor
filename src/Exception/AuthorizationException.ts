import ExceptionHanlder from "../Handler/ExceptionHanlder";

export default class AuthorizationException extends ExceptionHanlder {
    static TOKEN_VERIFY_FAILED = new AuthorizationException("Falha ao validar o token");
    static INVALID_TOKEN_FROM_REQUEST = new AuthorizationException("Token inválido para essa requisição");

    private constructor(public message: string) {
        super(message);
    }

    public getStatus(): number {
        return 401;
    }
}