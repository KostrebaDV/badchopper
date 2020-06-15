import {HOST} from '../contst';

const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: HOST,
});

const GET = (url: string) => {
    return axiosInstance.get(url);
};

const POST = (url: string, data: object) => {
    return axiosInstance.post(url, data);
};

const PUT = (url: string, data: object) => {
    return axiosInstance.put(url, data);
};

const DELETE = (url: string, data: object = {}) => {
    return axiosInstance.delete(url, { data: { ...data } });
};

const UPLOAD = (url: string, data: object, handleUploadProgress) => {
    return axiosInstance.post(
        url,
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progress => handleUploadProgress(progress)
        }
    );
};

export {
    GET,
    PUT,
    POST,
    DELETE,
    UPLOAD
};
