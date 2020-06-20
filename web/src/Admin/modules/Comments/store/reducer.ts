import {actionLogger, removeArrayElementById} from '../../../../utils';

import {
    SET_COMMENTS,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    SET_COMMENT
} from './const';

export const reducer = (state, payload) => {
    actionLogger(payload.type, payload);

    switch (payload.type) {
        case SET_COMMENTS:
            return {
                ...state,
                comments: [...state.comments, ...payload.comments]
            };
        case SET_COMMENT:
            return {
                ...state,
                comments: [payload.comment, ...state.comments]
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comments: removeArrayElementById(state.comments, payload.commentId, '_id')
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: [...removeArrayElementById(state.comments, payload.commentId, '_id'), ...payload.comment]
            };
        default:
            throw new Error();
    }
};
