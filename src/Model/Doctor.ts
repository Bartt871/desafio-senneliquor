import DoctorEntity, { IDoctor } from "../Entity/DoctorEntity";
import bcrypt from 'bcrypt';
import BadRequestException from "../Exception/BadRequestException";

class Doctor {
    static async login(username: string, password: string): Promise<IDoctor> {
        const doctor = await DoctorEntity.findOne({ username });

        if (!doctor) {
            throw BadRequestException.DOCTOR_USERNAME_NOT_FOUND;
        }

        const passwordMatch = await bcrypt.compare(password, doctor.password);

        if (!passwordMatch) {
            throw BadRequestException.INCORRECT_DOCTOR_PASSWORD;
        }

        return doctor;
    }
}

export default Doctor;
