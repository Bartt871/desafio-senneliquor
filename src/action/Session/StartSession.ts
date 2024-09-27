import { Request, Response } from "express";
import { HttpControllerInterface } from "../Interface/HttpControllerInterface";
import Doctor from "../../model/doctor";
import asyncHandler from "../../handler/AsyncHandler";

const StartSession: HttpControllerInterface = asyncHandler(
    async (request: Request, response: Response): Promise<void> => {
        const doctor = await Doctor.login(request.body.username, request.body.password);
        response.status(200).json(doctor);
    }
);

export default StartSession;