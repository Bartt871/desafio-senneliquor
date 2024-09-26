import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes';

const appCreator = () => {
    const app = express();

    app.use(express.json());

    const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

    mongoose.connect(mongoUrl)
        .then(() => console.log('Conectado ao MongoDB!'))
        .catch((err) => console.error('Erro ao conectar ao Mo   ngoDB:', err));

    app.use('/api', router);

    return app;
};

const startServer = () => {
    const port = process.env.SERVER_PORT ?? 8080;

    const app = appCreator();

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
};

export default startServer;