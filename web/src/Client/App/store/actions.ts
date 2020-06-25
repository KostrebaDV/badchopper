import {SET_DEPARTMENTS} from './const';

export default (dispatch) => {
    const setDepartments = (departments) => {
        dispatch({
            type: SET_DEPARTMENTS,
            departments
        });
    };

    return {
        setDepartments,
    };
};
