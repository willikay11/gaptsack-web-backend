import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to database');
    } catch (e) {
        console.log('Failed to connect to database', e);
    }
}