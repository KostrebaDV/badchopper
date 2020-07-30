import {
    SET_ASSISTANCE,
    SET_DEPARTMENTS,
    SET_GALLERIES,
    SET_FEEDBACKS,
    SET_LANGUAGE_CODE
} from './const';

export default (dispatch) => {
    const setLanguageCode = (languageCode) => {
        dispatch({
            type: SET_LANGUAGE_CODE,
            languageCode
        });
    };

    const setDepartments = (departments) => {
        dispatch({
            type: SET_DEPARTMENTS,
            departments
        });
    };

    const setGalleries = (galleries) => {
        dispatch({
            type: SET_GALLERIES,
            galleries
        });
    };

    const setAssistance = (assistance) => {
        dispatch({
            type: SET_ASSISTANCE,
            assistance
        });
    };

    const setFeedbacks = (feedbacks) => {
        dispatch({
            type: SET_FEEDBACKS,
            feedbacks
        });
    };

    return {
        setDepartments,
        setGalleries,
        setAssistance,
        setFeedbacks,
        setLanguageCode
    };
};
