import jwt from 'jsonwebtoken';
// import { config} from '../config/local';

/*
 * Check if token is valid
 */
export const checkToken = async (req, res, next) => {
    try {
        // if (!req.headers["x-access-token"]) {
        //     return res.status(401).send({ error: 'Unauthorized' });
        // }
        // const accessToken = req.headers["x-access-token"];
        // const { userId, exp } = await jwt.verify(accessToken, config.jwt);
        // // Check if token has expired
        // if (exp < Date.now().valueOf() / 1000) {
        //     return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
        // }
        next();
    } catch (error) {
        return res.status(401).send({ error: 'Unauthorized' });
    }
}