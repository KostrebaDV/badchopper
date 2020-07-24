import jwt from 'jsonwebtoken';
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_REFRESH_KEY = process.env.JWT_REFRESH_KEY;

export const createAccessToken = metaData => {
    return jwt.sign(metaData, JWT_SECRET_KEY, {expiresIn: '1d'})
};

export const createRefreshToken = metaData => {
    return jwt.sign(metaData, JWT_REFRESH_KEY, {expiresIn: '30d'})
};

export const getAccessToken = (req) => {
    const {access_token} = req.cookies;

    return access_token && access_token.split(' ')[1];
};

export const getRefreshToken = (req) => {
    const {refresh_token} = req.cookies;

    return  refresh_token && refresh_token.split(' ')[1];
};

export const getTokenBody = token => {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('binary'));
};
