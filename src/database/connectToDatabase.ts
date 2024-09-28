import mongoose from 'mongoose';

const ConnectToDatabase = async () => {
    const mongoUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
    try {
        await mongoose.connect(mongoUrl, {
            dbName: process.env.DB_NAME,
            auth: {
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD
            }
        });
        console.log('Conectado ao MongoDB!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
};

export default ConnectToDatabase;
