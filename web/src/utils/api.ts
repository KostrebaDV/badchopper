import {HOST} from '../const';
import {redirect as redirectMiddleware} from '../middlewares/redirect';

const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: HOST,
    withCredentials: true
});

const GET = (url: string) => {
    return redirectMiddleware(axiosInstance.get(url));
};

const POST = (url: string, data: object) => {
    return redirectMiddleware(axiosInstance.post(url, data));
};

const PUT = (url: string, data: object) => {
    return redirectMiddleware(axiosInstance.put(url, data));
};

const DELETE = (url: string, data: object = {}) => {
    return redirectMiddleware(axiosInstance.delete(url, { data: { ...data } }));
};

const UPLOAD = (url: string, data: object, handleUploadProgress) => {
    return redirectMiddleware(axiosInstance.post(
        url,
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progress => handleUploadProgress(progress)
        }
    ));
};

export {
    GET,
    PUT,
    POST,
    DELETE,
    UPLOAD
};
