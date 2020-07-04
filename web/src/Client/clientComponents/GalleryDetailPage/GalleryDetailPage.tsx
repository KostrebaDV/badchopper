import React from 'react';
import {Gallery} from '../Gallery/Gallery';
import classes from './styles/index.module.scss';
import {GALLERIES_NAME} from '../Gallery/conts';
import './styles/mainGallery.scss';
import {HOST} from '../../../const';
import {GallerySocialLinkButtons} from './components/GallerySocialLinkButtons/GallerySocialLinkButtons';
import {GalleryDetailPageImages} from './components/GalleryDetailPageImages/GalleryDetailPageImages';
import {useGetGalleries} from './hooks';
import {Header} from '../Header/Header';

const mainGalleryItemTemplate = ({ item, index }, galleryName) => {
    return `<img
                src="${HOST}${item.path}"
                class="${galleryName}-item index-${index}"
                data-index="${index}"
            >`;
};

const GalleryDetailPage = () => {
    const galleries =useGetGalleries();

    return (
        <>
            <Header
                label="!!Галерея"
                content="!!BadChopper - это первый Черновицкий Barbershop, который полностью воспроизводит традиции"
            />
            <div className={classes.galleryDetailPage}>
                <Gallery
                    items={galleries['mainPageGallery']}
                    galleryOptions={{
                        galleryItemTemplate: mainGalleryItemTemplate,
                        galleryName: GALLERIES_NAME.mainPageGallery,
                        activeElement: 1,
                        autoPlaytime: 5000
                    }}
                    navigationClassname={classes.galleryDetailPage__galleryNavigation}
                    allowNavigation
                    afterNavigationContent={GallerySocialLinkButtons}
                />
                <GalleryDetailPageImages
                    items={galleries['galleryImages']}
                    showOnInit={7}
                    showOnMore={3}
                />
            </div>
        </>
    );
};

export {GalleryDetailPage};
