import Doctor from "../../model/doctor";
import asyncHandler from "../../handler/AsyncHandler";

import { Request, Response } from "express";
import { HttpControllerInterface } from "../Interface/HttpControllerInterface";
import { generateToken } from "../../service/jwtToken";
import { DoctorSession } from "../../types/session";

const StartSession: HttpControllerInterface = asyncHandler(
    async (request: Request, response: Response): Promise<void> => {
        const doctor = await Doctor.login(request.body.username, request.body.password);

        const doctorId = doctor._id.toString();

        const token = generateToken({
            logged_id: doctorId,
            name: doctor.name,
            session_type: 'doctor'
        } as DoctorSession, { expiresIn: '12h' });

        response.status(200).json({
            logged_id: doctorId,
            name: doctor.name,
            token: token
        });
    }
);

export default StartSession;