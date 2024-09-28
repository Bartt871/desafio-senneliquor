import mongoose from 'mongoose';
import { Express } from 'express';
import { appCreator } from './appCreator';
import DoctorEntity from './entity/doctorEntity';
import TaskEntity from './entity/taskEntity';
import HospitalEntity from './entity/hospitalEntity';

export let app: Express | undefined = undefined;

export const setupApp = async () => {
    jest.setTimeout(Infinity);
    app = await appCreator();
};

export const closeConnection = async () => {
    await mongoose.connection.close();
};

export const recreateApp = async () => {
    await closeConnection();
    app = await appCreator();

    const clearDatabase = async () => {
        await DoctorEntity.deleteMany({});
        await TaskEntity.deleteMany({});
        await HospitalEntity.deleteMany({});
    }

    await clearDatabase();
};