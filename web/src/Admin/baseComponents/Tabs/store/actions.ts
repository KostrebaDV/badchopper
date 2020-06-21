import {SET_ACTIVE_TAB} from './const';

export default (dispatch) => {
    const setActiveTab = (activeTabName) => {
        dispatch({
            type: SET_ACTIVE_TAB,
            activeTabName
        });
    };

    return {
        setActiveTab,
    };
};
