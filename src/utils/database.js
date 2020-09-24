import { Sequelize } from 'sequelize';
// import { config } from '../config/local';

export const sequelize = new Sequelize('nodeserver', 'nodeuser', 'test', {
    host: 'localhost',
    dialect: 'mysql'
});

export const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to database');
    } catch (e) {
        console.log('Failed to connect to database', e);
    }
}