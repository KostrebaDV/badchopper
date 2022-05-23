import React from 'react';
import {Gallery} from '../Gallery/Gallery';
import classes from './styles/index.module.scss';
import {GALLERIES_NAME} from '../Gallery/conts';
import './styles/mainGallery.scss';
import {HOST} from '../../../const';
import {GalleryDetailPageImages} from './components/GalleryDetailPageImages/GalleryDetailPageImages';
import {useGetGalleries} from './hooks';
import {Header} from '../Header/Header';
import {translate} from '../../../utils';
import {codes} from '../../../static/translations/codes';

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
                firstLetterUppercase
                label={translate(codes.galleryLabel)}
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
