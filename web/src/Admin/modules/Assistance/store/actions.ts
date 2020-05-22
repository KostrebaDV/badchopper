import {SET_ASSISTANCE, DELETE_ASSISTANCE, UPDATE_ASSISTANCE} from './const';

export default (dispatch) => {
    const setAssistance = (assistance) => {
        dispatch({
            type: SET_ASSISTANCE,
            assistance
        });
    };

    const removeOneAssistance = (assistanceId) => {
        dispatch({
            type: DELETE_ASSISTANCE,
            assistanceId
        });
    };

    const updateAssistance = (assistance) => {
        dispatch({
            type: UPDATE_ASSISTANCE,
            assistance
        });
    };

    return {
        setAssistance,
        removeOneAssistance,
        updateAssistance
    };
};
