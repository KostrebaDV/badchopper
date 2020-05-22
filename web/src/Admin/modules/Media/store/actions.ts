import {GET_ALL_IMAGES} from './const';

export default (dispatch) => {
    const setAllImages = (images) => {
        dispatch({
            type: GET_ALL_IMAGES,
            images
        });
    };

    return {
        setAllImages
    };
};
