import React from 'react';
import {GalleyContextProvider} from './store';
import {GalleryModalsProvider} from './components/GalleryModalsProvider/GalleryModalsProvider';
import {GalleryHeader} from './components/GalleryHeader/GalleryHeader';
import {GalleryList} from './components/GalleryList/GalleryList';

const Gallery = () => {
    return (
        <GalleyContextProvider>
            <GalleryModalsProvider>
                <GalleryHeader/>
                <GalleryList/>
            </GalleryModalsProvider>
        </GalleyContextProvider>
    );
};

export {Gallery};
