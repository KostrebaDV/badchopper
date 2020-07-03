import {
    GET_ALL_GALLERIES,
    SET_GALLERY,
    DELETE_GALLERY,
    UPDATE_GALLERY
} from './const';

export default (dispatch) => {
    const setAllGalleries = (galleries) => {
        dispatch({
            type: GET_ALL_GALLERIES,
            galleries
        });
    };

    const setGallery = (gallery) => {
        dispatch({
            type: SET_GALLERY,
            gallery
        });
    };

    const removeOneGallery = (galleryId) => {
        dispatch({
            type: DELETE_GALLERY,
            galleryId
        });
    };

    const updateGallery = (gallery) => {
        dispatch({
            type: UPDATE_GALLERY,
            gallery
        });
    };

    return {
        setAllGalleries,
        setGallery,
        updateGallery,
        removeOneGallery
    };
};
