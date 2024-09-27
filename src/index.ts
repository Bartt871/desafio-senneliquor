import { appCreator } from "./appCreator";

const port = process.env.SERVER_PORT ?? 8080;

const startServer = async () => {
    try {
        const app = await appCreator();
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
};

startServer();
