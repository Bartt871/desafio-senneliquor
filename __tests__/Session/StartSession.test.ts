import { appCreator } from '../../src/appCreator';
import { faker } from '@faker-js/faker/locale/pt_BR';
import bcrypt from 'bcrypt';

import request from 'supertest';
import mongoose from 'mongoose';
import DoctorEntity from '../../src/entity/doctorEntity';
import BadRequestException from '../../src/exception/badRequestException';

const app = appCreator();

beforeAll(async () => {
    jest.setTimeout(Infinity);
    await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`, { dbName: process.env.DB_NAME });
    await DoctorEntity.deleteMany({});
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('StartSession', () => {
    it('success', async () => {
        const password = bcrypt.hash(faker.internet.password(), 10);

        const payload = {
            username: faker.internet.userName(),
            password: password
        };

        const response = await request(app)
            .post('/api/no-auth')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(400);
        expect(response.body.error).toBe(BadRequestException.getMessage(BadRequestException.DOCTOR_USERNAME_NOT_FOUND));
    });
});
