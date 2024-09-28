import express from 'express';
import router from './routes/routes';
import multer from 'multer';
import ErrorHanlder from './Handler/ErrorHandler';
import ConnectToDatabase from './Database/ConnectToDatabase';
import session from 'express-session';
import SessionMiddleware from './Middleware/Session/SessionMiddleware';

export const appCreator = async () => {
    const app = express();

    app.use(express.json());
    app.use(multer().none());

    app.use(session({
        secret: process.env.APP_SECRET ?? 'Devel',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.env.NODE_ENV !== 'development' }
    }));

    app.use(SessionMiddleware);

    await ConnectToDatabase();

    app.use('/api', router)

    app.use(ErrorHanlder);

    return app;
};