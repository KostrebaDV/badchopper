import {GET} from '../../utils/api';

const ENDPOINTS = {
    GET_ALL_DEPARTMENTS: '/departments/getAllDepartmentsClient',
    GET_ALL_ASSISTANCE: '/assistance/getAllAssistance',
    GET_DEPARTMENT_DETAIL: '/departments/getDepartment'
};

export const getAllDepartments = () => {
    return GET(ENDPOINTS.GET_ALL_DEPARTMENTS);
};

export const getDepartmentDetail = (id) => {
    return GET(`${ENDPOINTS.GET_DEPARTMENT_DETAIL}/${id}`);
};

export const getAllAssistance = () => {
    return GET(ENDPOINTS.GET_ALL_ASSISTANCE);
};
