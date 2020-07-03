import {GET, DELETE, POST, PUT} from '../../../utils/api';
import {ENDPOINTS} from './const';

export const addGallery = (data) => {
    return POST(ENDPOINTS.ADD_GALLERY, data);
};

export const editGallery = (data) => {
    return PUT(ENDPOINTS.EDIT_GALLERY, data);
};

export const getAllGalleries = () => {
    return GET(ENDPOINTS.GET_ALL_GALLERIES);
};

export const deleteGallery = (id) => {
    return DELETE(ENDPOINTS.DELETE_GALLERY, {id});
};
