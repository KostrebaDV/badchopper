import { GET, DELETE } from '../../../utils/api';
import {ENDPOINTS} from './const';

export const getAllImages = () => {
    return GET(ENDPOINTS.GET_ALL_IMAGES);
};

export const deleteImage = (id) => {
    return DELETE(ENDPOINTS.DELETE_IMAGE, {id});
};
