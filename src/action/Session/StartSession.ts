import { Request, Response } from "express";
import { HttpControllerInterface } from "../Interface/HttpControllerInterface";

const StartSession: HttpControllerInterface =
    async (request: Request, response: Response): Promise<void> => {

        response.status(200).json({ is_gay: false });
    };

export default StartSession;