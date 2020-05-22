import {INIT_NAVIGATION} from './const';

export default (dispatch) => {

    const setNavigationList = (navigationList) => {
        dispatch({
            type: INIT_NAVIGATION,
            navigationList
        });
    };

    return {
        setNavigationList
    };
};
