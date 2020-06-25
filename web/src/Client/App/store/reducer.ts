import {actionLogger} from '../../../utils';

import {
    SET_DEPARTMENTS
} from './const';

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case SET_DEPARTMENTS:
            return {
                ...state,
                departments: [...state.departments, ...payload.departments]
            };
        default:
            throw new Error();
    }
};
