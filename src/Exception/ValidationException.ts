import ExceptionHanlder from "../Handler/ExceptionHanlder";

export default class ValidationException extends ExceptionHanlder {
    public constructor(message: string) {
        super(message);
    }

    public getStatus(): number {
        return 422;
    }
}