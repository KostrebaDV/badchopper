import {useContext, useEffect} from 'react';
import {getGallery} from '../../App/api';
import {GALLERIES_NAME} from '../Gallery/conts';
import {AppContext} from '../../App/store';

export const useGetGalleries = () => {
    const {galleries, setGalleries} = useContext(AppContext);
    const {galleryImages, mainPageGallery} = galleries;

    useEffect(() => {
        if (galleryImages.length === 0 && mainPageGallery.length === 0) {
            getGallery(GALLERIES_NAME.mainPageGallery)
                .then(({data}) => setGalleries({mainPageGallery: data}));

            getGallery(GALLERIES_NAME.galleryImages)
                .then(({data}) => setGalleries({galleryImages: data}));
            // eslint-disable-next-line
        }
    }, [galleryImages, mainPageGallery, setGalleries]);

    return galleries;
};
