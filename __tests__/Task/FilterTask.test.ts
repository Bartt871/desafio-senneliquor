import { faker } from '@faker-js/faker/locale/pt_BR';
import { Express } from 'express';
import { app, clearDatabase, closeConnection, recreateApp, setupApp } from '../../src/JestSetup';
import { generateToken } from '../../src/Service/JwtToken';
import { DoctorSession } from '../../src/@types/Session';

import request from 'supertest';
import TaskEntity, { ITask } from '../../src/Entity/TaskEntity';
import DoctorEntity from '../../src/Entity/DoctorEntity';
import HospitalEntity from '../../src/Entity/HospitalEntity';

beforeAll(async () => await setupApp());
afterAll(async () => await closeConnection());
beforeEach(async () => await recreateApp());

describe('FilterTask', () => {
    beforeEach(async () => await clearDatabase());

    it('FilterTask_success', async () => {
        const expectedTotal = 10;

        const hospitalId = (await new HospitalEntity({
            name: faker.company.name(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude()
        }).save())._id;

        const doctor = await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save();

        const anotherDoctor = await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save();

        for (let i = 0; i < expectedTotal; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'A'
            }).save();

            // from another doctor
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: anotherDoctor._id,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'A'
            }).save();

            // not vinculed
            await new TaskEntity({
                hospital_id: hospitalId,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'A'
            }).save();
        }

        const token = generateToken({ logged_id: doctor._id.toString(), name: doctor.name, session_type: 'doctor' } as DoctorSession);
        const response = await request(app as Express)
            .get('/api/task')
            .set('Authorization', token)
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

        const doctor = await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save();

        for (let i = 0; i < expectedTotal; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: expectedStatus
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'E'
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: 'N',
                status: 'C'
            }).save();
        }

        const payload = {
            statuses: ['A']
        };

        const token = generateToken({ logged_id: doctor._id.toString(), name: doctor.name, session_type: 'doctor' } as DoctorSession);
        const response = await request(app as Express)
            .get('/api/task')
            .send(payload)
            .set('Authorization', token)
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

        const doctor = await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save();

        for (let i = 0; i < expectedTotal; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: expectedCareCategory,
                patient_name: faker.person.fullName(),
                patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
                status: faker.helpers.arrayElement(['A', 'E', 'C'])
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: 2,
                patient_name: faker.person.fullName(),
                patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
                status: faker.helpers.arrayElement(['A', 'E', 'C'])
            }).save();
        }

        for (let i = 0; i < 5; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: 2,
                patient_name: faker.person.fullName(),
                patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
                status: faker.helpers.arrayElement(['A', 'E', 'C'])
            }).save();
        }

        const payload = {
            care_categories: [expectedCareCategory]
        };

        const token = generateToken({ logged_id: doctor._id.toString(), name: doctor.name, session_type: 'doctor' } as DoctorSession);
        const response = await request(app as Express)
            .get('/api/task')
            .send(payload)
            .set('Authorization', token)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(expectedTotal);
        expect(response.body.tasks.length).toBe(expectedTotal);
        expect(response.body.tasks.map((task: ITask) => task.care_category)).toContain(1);
    });

    it('FilterTask_filter_search_success', async () => {
        const expectedTotal = 1;
        const expectedPatientName = 'Jéssica da sélva';

        const hospitalId = (await new HospitalEntity({
            name: faker.company.name(),
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude()
        }).save())._id;

        const doctor = await new DoctorEntity({
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }).save();

        await new TaskEntity({
            hospital_id: hospitalId,
            doctor_id: doctor._id,
            care_category: 1,
            patient_name: expectedPatientName,
            patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
            status: faker.helpers.arrayElement(['A', 'E', 'C'])
        }).save();

        for (let i = 0; i < 500; i++) {
            await new TaskEntity({
                hospital_id: hospitalId,
                doctor_id: doctor._id,
                care_category: 1,
                patient_name: faker.person.fullName(),
                patient_biological_gender: faker.helpers.arrayElement(['M', 'F', 'N']),
                status: faker.helpers.arrayElement(['A', 'E', 'C'])
            }).save();
        }

        const payload = {
            search: expectedPatientName
        };

        const token = generateToken({ logged_id: doctor._id.toString(), name: doctor.name, session_type: 'doctor' } as DoctorSession);
        const response = await request(app as Express)
            .get('/api/task')
            .send(payload)
            .set('Authorization', token)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(expectedTotal);
        expect(response.body.tasks.length).toBe(expectedTotal);
        expect(response.body.tasks.map((task: ITask) => task.patient_name)).toContain(expectedPatientName);
    });
});
