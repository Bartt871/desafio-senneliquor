import DoctorEntity, { IDoctor } from "../Entity/DoctorEntity";
import bcrypt from 'bcrypt';
import BadRequestException from "../Exception/BadRequestException";

class Doctor {
    static async filter(
        page: number,
        pageSize: number,
        search?: string
    ): Promise<{ total: number; doctors: IDoctor[]; }> {
        const filter: any = {};

        if (search) {
            const regexPattern = search
                .split(' ')
                .map(term => `\\b${term.replace(/[\u0300-\u036f]/g, '')}\\b`)
                .join('|');
            filter.name = { $regex: new RegExp(regexPattern, 'i') };
        }

        const total = await DoctorEntity.countDocuments(filter);

        if (!total) {
            return { total: 0, doctors: [] };
        }

        const skip = (page - 1) * pageSize;
        const doctors = await DoctorEntity.find(filter).skip(skip).limit(pageSize).exec();

        return { total: total, doctors: doctors }
    }
    
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
