import ExceptionHanlder from "../Handler/ExceptionHanlder";

export default class BadRequestException extends ExceptionHanlder {
    static DOCTOR_USERNAME_NOT_FOUND = new BadRequestException("O usuário não foi encontrado");
    static INCORRECT_DOCTOR_PASSWORD = new BadRequestException("A senha não está correta");

    private constructor(public message: string) {
        super(message);
    }

    public getStatus(): number {
        return 400;
    }
}