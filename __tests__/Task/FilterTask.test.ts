import { faker } from '@faker-js/faker/locale/pt_BR';
import { Express } from 'express';
import { app, closeConnection, recreateApp, setupApp } from '../../src/jestSetup';

import request from 'supertest';
import TaskEntity, { ITask } from '../../src/entity/taskEntity';
import DoctorEntity from '../../src/entity/doctorEntity';
import HospitalEntity from '../../src/entity/hospitalEntity';

beforeAll(async () => await setupApp());
afterAll(async () => await closeConnection());
beforeEach(async () => await recreateApp());

describe('FilterTask', () => {
    it('FilterTask_success', async () => {
        const expectedTotal = 10;

        const hospitalId = (await new HospitalEntity({
            name: faker.company.name(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude()
        }).save())._id;

        const doctorId = (await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save())._id;

        for (let i = 0; i < expectedTotal; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctorId,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'A'
            }).save();
        }

        const response = await request(app as Express)
            .get('/api/task')
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(expectedTotal);
        expect(response.body.tasks.length).toBe(expectedTotal);
    });

    it('FilterTask_filter_statuses_success', async () => {
        const expectedTotal = 10;
        const expectedStatus = 'A';

        const hospitalId = (await new HospitalEntity({
            name: faker.company.name(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude()
        }).save())._id;

        const doctorId = (await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save())._id;

        for (let i = 0; i < expectedTotal; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctorId,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: expectedStatus
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctorId,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'E'
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctorId,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'C'
            }).save();
        }

        const payload = {
            statuses: ['A']
        };

        const response = await request(app as Express)
            .get('/api/task')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(expectedTotal);
        expect(response.body.tasks.length).toBe(expectedTotal);
        expect(response.body.tasks.map((task: ITask) => task.status)).toContain('A');
    });

    it('FilterTask_filter_care_categories_success', async () => {
        const expectedTotal = 10;
        const expectedCareCategory = 1;

        const hospitalId = (await new HospitalEntity({
            name: faker.company.name(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude()
        }).save())._id;

        const doctorId = (await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save())._id;

        for (let i = 0; i < expectedTotal; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctorId,
                care_category: expectedCareCategory,
                patient_name: faker.person.fullName(),
                patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
                status: faker.helpers.arrayElement(['A', 'E', 'C'])
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctorId,
                care_category: 2,
                patient_name: faker.person.fullName(),
                patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
                status: faker.helpers.arrayElement(['A', 'E', 'C'])
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctorId,
                care_category: 2,
                patient_name: faker.person.fullName(),
                patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
                status: faker.helpers.arrayElement(['A', 'E', 'C'])
            }).save();
        }

        const payload = {
            care_categories: [expectedCareCategory]
        };

        const response = await request(app as Express)
            .get('/api/task')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(expectedTotal);
        expect(response.body.tasks.length).toBe(expectedTotal);
        expect(response.body.tasks.map((task: ITask) => task.care_category)).toContain(1);
    });
});
