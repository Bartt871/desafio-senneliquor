import { appCreator } from '../src/appCreator';
import { faker } from '@faker-js/faker/locale/pt_BR';

import request from 'supertest';
import mongoose from 'mongoose';

const app = appCreator();

beforeAll(async () => {
    jest.setTimeout(Infinity);
    await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`, { dbName: process.env.DB_NAME });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Hospitals', () => {
    it('create_hospital', async () => {
        const hospitalData = {
            name: faker.company.name(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
        };

        const response = await request(app)
            .post('/api/no-auth')
            .send(hospitalData)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', hospitalData.name);
    });
});
