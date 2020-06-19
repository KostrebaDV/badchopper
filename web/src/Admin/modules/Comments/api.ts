import { GET, DELETE, POST, PUT } from '../../../utils/api';
import {ENDPOINTS} from './const';

export const addComment = (data) => {
    return POST(ENDPOINTS.ADD_COMMENT, data);
};

export const getAllComments = () => {
    return GET(ENDPOINTS.GET_ALL_COMMENTS);
};

export const updateComment = (data) => {
    return PUT(ENDPOINTS.UPDATE_COMMENT, data)
};

export const deleteComment = (id) => {
    return DELETE(ENDPOINTS.DELETE_COMMENT, {id});
};
