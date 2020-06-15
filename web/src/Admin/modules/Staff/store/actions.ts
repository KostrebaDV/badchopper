import {SET_STAFF, UPDATE_STAFF, SET_ALL_STAFF, DELETE_STAFF} from './const';

export default (dispatch) => {
    const setStaff = (staff) => {
        dispatch({
            type: SET_STAFF,
            staff
        });
    };

    const setAllStaff = (staffList) => {
        dispatch({
            type: SET_ALL_STAFF,
            staffList
        });
    };

    const removeStaff = (staffId) => {
        dispatch({
            type: DELETE_STAFF,
            staffId
        });
    };

    const updateStaff = (staff) => {
        dispatch({
            type: UPDATE_STAFF,
            staff
        });
    };

    return {
        setStaff,
        setAllStaff,
        updateStaff,
        removeStaff
    };
};
