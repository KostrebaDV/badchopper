import {SET_COMMENTS, DELETE_COMMENT, UPDATE_COMMENT} from './const';

export default (dispatch) => {
    const setComments = (comments) => {
        dispatch({
            type: SET_COMMENTS,
            comments
        });
    };

    const removeComment = (commentId) => {
        dispatch({
            type: DELETE_COMMENT,
            commentId
        });
    };

    const updateComment = (comment) => {
        dispatch({
            type: UPDATE_COMMENT,
            commentId: comment[0]._id
        });
    };

    return {
        setComments,
        updateComment,
        removeComment
    };
};
