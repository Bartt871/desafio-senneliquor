import mongoose from 'mongoose';
import { Express } from 'express';
import { appCreator } from './AppCreator';
import DoctorEntity from './Entity/DoctorEntity';
import TaskEntity from './Entity/TaskEntity';
import HospitalEntity from './Entity/HospitalEntity';

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