import {actionLogger} from '../../../utils';

import {
    SET_DEPARTMENTS,
    SET_GALLERIES,
    SET_ASSISTANCE,
    SET_FEEDBACKS
} from './const';

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case SET_DEPARTMENTS:
            return {
                ...state,
                departments: [...state.departments, ...payload.departments]
            };
        case SET_GALLERIES:
            return {
                ...state,
                galleries: {...state.galleries, ...payload.galleries}
            };
        case SET_ASSISTANCE:
            return {
                ...state,
                assistance: [...payload.assistance]
            };
        case SET_FEEDBACKS:
            return {
                ...state,
                feedbacks: [...payload.feedbacks]
            };
        default:
            throw new Error();
    }
};
