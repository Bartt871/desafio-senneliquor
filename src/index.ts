import { appCreator } from "./appCreator";

const port = process.env.SERVER_PORT ?? 8080;

const app = appCreator();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});