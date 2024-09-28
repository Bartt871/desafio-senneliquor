import express from 'express';
import router from './routes/routes';
import multer from 'multer';
import ErrorHanlder from './handler/ErrorHandler';
import ConnectToDatabase from './database/connectToDatabase';

export const appCreator = async () => {
    const app = express();

    app.use(express.json());
    app.use(multer().none());
    
    await ConnectToDatabase();

    app.use('/api', router)

    app.use(ErrorHanlder);

    return app;
};