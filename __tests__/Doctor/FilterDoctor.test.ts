import request from 'supertest';
import DoctorEntity, { IDoctor } from '../../src/Entity/DoctorEntity';

import { faker } from '@faker-js/faker/locale/pt_BR';
import { Express } from 'express';
import { app, clearDatabase, closeConnection, recreateApp, setupApp } from '../../src/JestSetup';

beforeAll(async () => await setupApp());
afterAll(async () => await closeConnection());
beforeEach(async () => await recreateApp());

describe('FilterDoctor', () => {
    beforeEach(async () => await clearDatabase());

    it('FilterDoctor_filter_search_success', async () => {
        const expectedTotal = 1;
        const expectedName = 'Will Bárt';

        await new DoctorEntity({
            name: expectedName,
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save();

        for (let i = 0; i < 10; i++) {
            await new DoctorEntity({
                name: faker.person.fullName(),
                username: faker.internet.userName(),
                password: faker.internet.password()
            }).save();
        }

        const payload = {
            search: expectedName
        };

        const response = await request(app as Express)
            .get('/api/doctor')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(expectedTotal);
        expect(response.body.doctors.length).toBe(expectedTotal);
        expect(response.body.doctors.map((doctor: IDoctor) => doctor.name)).toContain(expectedName);
    });
});
