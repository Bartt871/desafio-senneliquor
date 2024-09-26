import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes';
import multer from 'multer';

export const appCreator = () => {
    const app = express();

    app.use(express.json());

    const upload = multer();
    app.use(upload.none());

    const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

    mongoose.connect(mongoUrl, { dbName: process.env.DB_NAME })
        .then(() => console.log('Conectado ao MongoDB!'))
        .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

    app.use('/api', router);

    return app;
};