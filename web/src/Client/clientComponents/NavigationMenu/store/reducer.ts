import {
    OPEN_NAVIGATION
} from './const';

export const reducer = (state, payload) => {
    switch (payload.type) {
        case OPEN_NAVIGATION:
            return {
                ...state,
                isOpen: payload.open
            };
        default:
            throw new Error();
    }
};
