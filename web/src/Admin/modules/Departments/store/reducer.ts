import { actionLogger } from '../../../../utils';

import {
    SET_ALL_DEPARTMENTS
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
        case SET_ALL_DEPARTMENTS:
            return {
                ...state,
                departmentsList: [...payload.departmentsList]
            };
		default:
			throw new Error();
	}
};
