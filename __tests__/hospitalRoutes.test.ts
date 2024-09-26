import request from 'supertest';
import { appCreator } from '../src/appCreator';
import mongoose from 'mongoose';

const app = appCreator();

beforeAll(async () => {
    await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`, { dbName: process.env.DB_NAME });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Hospitals API', () => {
    it('should create a new hospital', async () => {
        const hospitalData = {
            name: 'Hospital Central',
            latitude: -23.550520,
            longitude: -46.633308,
        };

        const response = await request(app)
            .post('/api/no-auth')
            .send(hospitalData)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', hospitalData.name);
    });
});
