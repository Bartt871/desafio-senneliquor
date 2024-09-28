import { NextFunction, Request, Response } from "express";
import ExceptionHanlder from "./ExceptionHanlder";

const ErrorHanlder = (error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {

        if (error instanceof ExceptionHanlder) {
            response.status(error.getStatus()).json({ error: error.message });
        } else {
            response.status(500).json({ error: 'Ocorreu um erro não esperado.' });
        }
    } else {
        response.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

export default ErrorHanlder;