import request from 'supertest';
import HospitalEntity, { IHospital } from '../../src/Entity/HospitalEntity';

import { faker } from '@faker-js/faker/locale/pt_BR';
import { Express } from 'express';
import { app, clearDatabase, closeConnection, recreateApp, setupApp } from '../../src/JestSetup';

beforeAll(async () => await setupApp());
afterAll(async () => await closeConnection());
beforeEach(async () => await recreateApp());

describe('FilterHospital', () => {
    beforeEach(async () => await clearDatabase());

    it('FilterHospital_filter_search_success', async () => {
        const expectedTotal = 1;
        const expectedName = 'Hospital Sírio Libanês';

        await new HospitalEntity({
            name: expectedName,
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude()
        }).save();

        for (let i = 0; i < 500; i++) {
            await new HospitalEntity({
                name: faker.company.name(),
                latitude: faker.location.latitude(),
                longitude: faker.location.longitude()
            }).save();
        }

        const payload = {
            search: expectedName
        };

        const response = await request(app as Express)
            .get('/api/hospital')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(expectedTotal);
        expect(response.body.hospitals.length).toBe(expectedTotal);
        expect(response.body.hospitals.map((hospital: IHospital) => hospital.name)).toContain(expectedName);
    });
});
