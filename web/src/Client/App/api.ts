import {GET} from '../../utils/api';

const ENDPOINTS = {
    GET_ALL_DEPARTMENTS: '/departments/getAllDepartmentsClient',
    GET_ALL_ASSISTANCE: '/assistance/getAllAssistance',
    GET_GALLERY: '/gallery/getGalleryImages',
    GET_COMMENTS: '/comments/getAllComments',
    GET_TRANSLATIONS: '/translations/getTranslations',
    GET_SYNC_HASH: '/syncHash/getSyncHash'
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

export const getTranslations = () => {
    return GET(ENDPOINTS.GET_TRANSLATIONS);
};

export const getSyncHash = () => {
    return GET(ENDPOINTS.GET_SYNC_HASH);
};
