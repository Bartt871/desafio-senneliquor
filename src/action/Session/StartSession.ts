import { Request, Response } from "express";
import { HttpControllerInterface } from "../Interface/HttpControllerInterface";
import Hospital from "../../model/hospital";

const StartSession: HttpControllerInterface =
    async (request: Request, response: Response): Promise<void> => {
        try {
            const hospital = await Hospital.insertHospital(request.body);
            response.status(200).json(hospital);
        } catch (error) {

            if (error instanceof Error) {
                response.status(400).json({ error: error.message });
            } else {
                response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    };

export default StartSession;