import {GET, POST, PUT, DELETE} from '../../../utils/api';
import {ENDPOINTS} from './const';

export const addStaff = (data) => {
    return POST(ENDPOINTS.ADD_STAFF, data)
};

export const editStaff = (data) => {
    return PUT(ENDPOINTS.UPDATE_STAFF, data)
};

export const deleteStaff = (id) => {
    return DELETE(ENDPOINTS.DELETE_STAFF, id)
};

export const getAllStaff = () => {
    return GET(ENDPOINTS.GET_ALL_STAFF)
};

export const getAllMangerStaff = () => {
    return GET(ENDPOINTS.GET_ALL_MANAGER_STAFF)
};

export const getAllBarberStaff = () => {
    return GET(ENDPOINTS.GET_ALL_BARBER_STAFF)
};
