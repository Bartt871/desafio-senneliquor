import { faker } from '@faker-js/faker/locale/pt_BR';
import { Express } from 'express';
import { verifyToken } from '../../src/Service/JwtToken';
import { DoctorSession } from '../../src/Types/Session';
import { app, closeConnection, recreateApp, setupApp } from '../../src/JestSetup';

import bcrypt from 'bcrypt';
import request from 'supertest';
import DoctorEntity from '../../src/Entity/DoctorEntity';
import BadRequestException from '../../src/Exception/BadRequestException';

beforeAll(async () => await setupApp());
afterAll(async () => await closeConnection());
beforeEach(async () => await recreateApp());

describe('StartSession', () => {
    it('StartSession_success', async () => {
        const password = faker.internet.password({ length: 8 });

        const doctor = new DoctorEntity({
            name: faker.person.fullName(),
            username: 'william.barreto',
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
            username: 'william.barreto',
            password: await bcrypt.hash(faker.internet.password({ length: 8 }), 10)
        });

        await doctor.save();

        const payload = {
            username: doctor.username,
            password: faker.internet.password({ length: 8 })
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
            username: 'william.barreto',
            password: faker.internet.password({ length: 8 })
        };

        const response = await request(app as Express)
            .post('/api/no-auth')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(400);
        expect(response.body.error).toBe(BadRequestException.getMessage(BadRequestException.DOCTOR_USERNAME_NOT_FOUND));
    });
});
