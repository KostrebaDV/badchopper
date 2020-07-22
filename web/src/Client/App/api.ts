import {GET} from '../../utils/api';

const ENDPOINTS = {
    GET_ALL_DEPARTMENTS: '/departments/getAllDepartmentsClient',
    GET_ALL_ASSISTANCE: '/assistance/getAllAssistance',
    GET_GALLERY: '/gallery/getGalleryImages',
    GET_COMMENTS: '/comments/getAllComments'
};

export const getAllDepartments = () => {
    return GET(ENDPOINTS.GET_ALL_DEPARTMENTS);
};

export const getAllAssistance = () => {
    return GET(ENDPOINTS.GET_ALL_ASSISTANCE);
};

export const getGallery = (systemName) => {
    return GET(`${ENDPOINTS.GET_GALLERY}/${systemName}`);
};

export const getFeedbacks = () => {
    return GET(ENDPOINTS.GET_COMMENTS);
};
