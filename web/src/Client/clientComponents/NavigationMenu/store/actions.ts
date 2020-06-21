import {OPEN_NAVIGATION} from './const';

export default (dispatch) => {
    const openNavigation = (open) => {
        dispatch({
            type: OPEN_NAVIGATION,
            open
        });
    };

    return {
        openNavigation
    };
};
