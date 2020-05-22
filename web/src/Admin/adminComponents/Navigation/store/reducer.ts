import { actionLogger } from '../../../../utils';

import {
    INIT_NAVIGATION
} from './const';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
        case INIT_NAVIGATION:
            return {
                ...state,
                navigationList: [...payload.navigationList]
            };
		default:
			throw new Error();
	}
};
