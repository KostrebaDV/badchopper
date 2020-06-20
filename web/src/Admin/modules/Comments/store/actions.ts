import {SET_COMMENTS, DELETE_COMMENT, UPDATE_COMMENT, SET_COMMENT} from './const';

export default (dispatch) => {
    const setComments = (comments) => {
        dispatch({
            type: SET_COMMENTS,
            comments
        });
    };

    const setComment = (comment) => {
        dispatch({
            type: SET_COMMENT,
            comment
        });
    };

    const removeComment = (commentId) => {
        dispatch({
            type: DELETE_COMMENT,
            commentId
        });
    };

    const updateComment = (comment) => {
        const payload = {
            comment:comment,
            commentId: comment[0]._id
        }

        dispatch({
            type: UPDATE_COMMENT,
            ...payload
        });
    };

    return {
        setComments,
        updateComment,
        removeComment,
        setComment
    };
};
