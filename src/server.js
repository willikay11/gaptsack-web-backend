import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors';
import { connect } from './utils/database';
import contactRouter from './resources/Message/message.router';
import dotenv from 'dotenv';

dotenv.config();
export const app = express();
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use('/api', contactRouter);

export const start = async () => {
    try {
        await connect();
        app.listen(4000, () => {
            console.log('Server is listening on http://localhost:4000')
        })
    } catch (e) {
        console.log(e);
    }
}