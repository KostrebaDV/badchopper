import {actionLogger, removeArrayElementById} from '../../../../utils';

import {
    SET_STAFF,
    UPDATE_STAFF,
    SET_ALL_STAFF,
    DELETE_STAFF
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
        case SET_ALL_STAFF:
            return {
                ...state,
                staffList: [...payload.staffList]
            };
        case SET_STAFF:
            return {
                ...state,
                staffList: [payload.staff, ...state.staffList]
            };
        case DELETE_STAFF:
            return {
                ...state,
                staffList: removeArrayElementById(state.staffList, payload.staffId, '_id')
            };
        case UPDATE_STAFF:
            return {
                ...state,
                staffList: [...payload.staff, ...removeArrayElementById(state.staffList, payload.staff[0]._id, '_id')]
            };
		default:
			throw new Error();
	}
};
