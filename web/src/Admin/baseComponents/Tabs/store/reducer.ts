import {actionLogger} from '../../../../utils';

import {
    SET_ACTIVE_TAB
} from './const';

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case SET_ACTIVE_TAB:
            return {
                ...state,
                activeTabName: payload.activeTabName
            };
        default:
            throw new Error();
    }
};
