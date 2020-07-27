import React from 'react';
import {useGetFeedbacks} from './hooks';
import {Gallery} from '../Gallery/Gallery';
import {HOST} from '../../../const';
import {FEEDBACKS_GALLERY} from './const';
import './styles/feedbacksGallery.scss';
import {Header} from '../Header/Header';
import classes from './styles/index.module.scss';
import feedbackQuotes from "../../../static/images/feedback_quotes.svg";

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
            <div class="${galleryName}-item__imageWrapper">
                 <img
                    data-index="${index}"
                    class="${galleryName}-item__image"
                    src="${HOST}${item.image.path}"
                >
                <div>
                        <div class="${galleryName}-item__name">
                            ${item.name}&nbsp;${item.surname}
                        </div>
                        <div class="${galleryName}-item__link">
                            <a href="${item.instagramUrl}">Instagram</a>
                        </div>
                </div> 
            </div>
               
        </div>
    `;
};

const FeedbacksDetailPage = () => {
    const feedbacks = useGetFeedbacks();

    return (
        <>
            <div className={classes.feedbacksDetailPage}>
                <div className={classes.feedbacksDetailPage__feedbackQuotes}>
                    <img src={feedbackQuotes} alt="feedbackQuotes"/>
                </div>
                <div className={classes.feedbacksDetailPage__feedbacks}>
                    <Header
                        label="!!Отзывы"
                        className={classes.feedbacksDetailPage__headLabel}
                    />
                    <Gallery
                        navigationClassname={classes.feedbacksDetailPage__navigationClassname}
                        galleryContainerClassName={classes.feedbacksGallery}
                        galleryDuplicateContainerClassName={classes.duplicateFeedbacksGallery}
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
            </div>
        </>
    );
};

export {FeedbacksDetailPage};
