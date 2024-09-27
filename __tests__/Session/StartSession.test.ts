import { appCreator } from '../../src/appCreator';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { Express } from 'express';
import { verifyToken } from '../../src/service/jwtToken';
import { DoctorSession } from '../../src/types/session';

import bcrypt from 'bcrypt';
import request from 'supertest';
import mongoose from 'mongoose';
import DoctorEntity from '../../src/entity/doctorEntity';
import BadRequestException from '../../src/exception/badRequestException';

let app: Express | undefined = undefined;

beforeAll(async () => {
    jest.setTimeout(Infinity);
    app = await appCreator();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('StartSession', () => {
    beforeAll(async () => {
        await DoctorEntity.deleteMany({});
    });

    it('StartSession_success', async () => {
        const password = faker.internet.password();

        const doctor = new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: await bcrypt.hash(password, 10)
        });

        await doctor.save();

        const payload = {
            username: doctor.username,
            password: password
        };

        const response = await request(app as Express)
            .post('/api/no-auth')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);

        const doctorId = doctor._id.toString();

        expect(response.body.logged_id).toBe(doctorId);

        const tokenInformations = verifyToken<DoctorSession>(response.body.token);

        expect(tokenInformations.logged_id).toBe(doctorId);
        expect(tokenInformations.name).toBe(doctor.name);
        expect(tokenInformations.session_type).toBe('doctor');
        
    });

    it('startsession_error_incorrect_doctor_password', async () => {
        const doctor = new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: await bcrypt.hash(faker.internet.password(), 10)
        });

        await doctor.save();

        const payload = {
            username: doctor.username,
            password: faker.internet.password()
        };

        const response = await request(app as Express)
            .post('/api/no-auth')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(400);
        expect(response.body.error).toBe(BadRequestException.getMessage(BadRequestException.INCORRECT_DOCTOR_PASSWORD));
    });

    it('StartSession_error_doctor_username_not_found', async () => {
        const payload = {
            username: faker.internet.userName(),
            password: faker.internet.password()
        };

        const response = await request(app as Express)
            .post('/api/no-auth')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(400);
        expect(response.body.error).toBe(BadRequestException.getMessage(BadRequestException.DOCTOR_USERNAME_NOT_FOUND));
    });
});
