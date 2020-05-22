import {SET_ALL_DEPARTMENTS} from './const';

export default (dispatch) => {
    const setAllDepartments = (departmentsList) => {
        dispatch({
            type: SET_ALL_DEPARTMENTS,
            departmentsList
        });
    };

    return {
        setAllDepartments
    };
};
