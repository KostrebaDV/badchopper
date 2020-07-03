import {actionLogger, removeArrayElementById} from '../../../../utils';

import {
    GET_ALL_GALLERIES,
    SET_GALLERY,
    UPDATE_GALLERY,
    DELETE_GALLERY
} from './const';

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case GET_ALL_GALLERIES:
            return {
                ...state,
                galleries: payload.galleries
            };
        case SET_GALLERY:
            return {
                ...state,
                galleries: [...state.galleries, payload.gallery]
            };
        case UPDATE_GALLERY:
            return {
                ...state,
                galleries: [...removeArrayElementById(state.galleries, payload.gallery._id, '_id'), payload.gallery]
            };
        case DELETE_GALLERY:
            return {
                ...state,
                galleries: removeArrayElementById(state.galleries, payload.galleryId, '_id')
            };
        default:
            throw new Error();
    }
};
