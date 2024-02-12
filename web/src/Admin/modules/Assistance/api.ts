import { GET, DELETE, POST, PUT } from '../../../utils/api';
import {ENDPOINTS} from './const';

export const addAssistance = (data) => {
    return POST(ENDPOINTS.ADD_ASSISTANCE, data);
};

export const getAllAssistance = () => {
    return GET(ENDPOINTS.GET_ALL_ASSISTANCE);
};

export const updateAssistance = (data) => {
    return PUT(ENDPOINTS.UPDATE_ASSISTANCE, data);
};

export const deleteAssistance = (id) => {
    return DELETE(ENDPOINTS.DELETE_ASSISTANCE, {id});
};
