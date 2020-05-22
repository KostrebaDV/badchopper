import { actionLogger } from '../../../../utils';

import {
    GET_ALL_IMAGES
} from './const';

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case GET_ALL_IMAGES:
            return {
                ...state,
                images: payload.images
            };
        default:
            throw new Error();
    }
};
