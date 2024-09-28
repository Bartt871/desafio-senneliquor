import Doctor from "../../Model/Doctor";
import asyncHandler from "../../Handler/AsyncHandler";

import { generateToken } from "../../Service/JwtToken";
import { DoctorSession } from "../../Types/Session";

export interface StartSessionBody {
    username: string;
    password: string;
}

const StartSession = asyncHandler<StartSessionBody>(
    async (request, response) => {
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