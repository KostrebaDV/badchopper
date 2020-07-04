import React from 'react';
import {useGetFeedbacks} from './hooks';
import {Gallery} from '../Gallery/Gallery';
import {HOST} from '../../../const';
import {FEEDBACKS_GALLERY} from './const';
import './styles/feedbacksGallery.scss';
import {Header} from '../Header/Header';
import classes from './styles/index.module.scss';

const feedbackTemplate = ({item, index}, galleryName) => {
    return `
        <div
            class="${galleryName}-item index-${index}"
            data-index="${index}"
        >
            <div
                class="${galleryName}-item__text"
                data-index="${index}"
            >
            ${item.description}
            </div>
            <img
                data-index="${index}"
                class="${galleryName}-item__image"
                src="${HOST}${item.image.path}"
            >        
        </div>
    `;
};

const FeedbacksDetailPage = () => {
    const feedbacks = useGetFeedbacks();

    return (
        <>
            <Header
                label="!!Отзывы"
                content="!!BadChopper - это первый Черновицкий Barbershop, который полностью воспроизводит традиции"
            />
            <div className={classes.feedbacksDetailPage}>
                <Gallery
                    items={feedbacks}
                    galleryOptions={{
                        galleryItemTemplate: feedbackTemplate,
                        galleryName: FEEDBACKS_GALLERY,
                        activeElement: 1,
                        autoPlaytime: 5000,
                        infiniteScroll: true
                    }}
                    allowNavigation

                />
            </div>
        </>
    );
};

export {FeedbacksDetailPage};
