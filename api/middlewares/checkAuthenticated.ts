import jwt from 'jsonwebtoken';
import {getAccessToken} from '../utils/authentication/authentication';
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const checkAuthenticated = (req, res, next) => {
    const token = getAccessToken(req);

    if (token == null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, JWT_SECRET_KEY, (error, user) => {
        if (error) return res.sendStatus(403);

        req.user = user;

        next();
    })
};
