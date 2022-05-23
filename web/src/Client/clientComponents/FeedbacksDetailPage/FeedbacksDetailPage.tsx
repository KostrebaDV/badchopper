import React from 'react';
import {useGetFeedbacks} from './hooks';
import {Gallery} from '../Gallery/Gallery';
import {HOST} from '../../../const';
import {FEEDBACKS_GALLERY} from './const';
import './styles/feedbacksGallery.scss';
import {Header} from '../Header/Header';
import classes from './styles/index.module.scss';
import feedbackQuotes from "../../../static/images/feedback_quotes.svg";
import {isMobile} from "react-device-detect";
import {translate} from '../../../utils';
import {codes} from '../../../static/translations/codes';
import {BasePageLayout} from '../BasePageLayout/BasePageLayout';
import {BasePageLayoutLeft} from '../BasePageLayout/BasePageLayoutLeft';
import {BasePageLayoutRight} from '../BasePageLayout/BasePageLayoutRight';

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
            <div
                class="${galleryName}-item__imageWrapper"
                data-index="${index}"
            >
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
        <BasePageLayout className={classes.feedbacksDetailPage}>
            {
                isMobile && (
                    <Header
                        firstLetterUppercase
                        label={translate(codes.feedbacksLabel)}
                    />
                )
            }
            <BasePageLayoutLeft className={classes.feedbacksDetailPage__feedbackQuotes}>
                <img src={feedbackQuotes} alt="feedbackQuotes"/>
            </BasePageLayoutLeft>
            <BasePageLayoutRight className={classes.feedbacksDetailPage__feedbacks}>
                {
                    !isMobile && (
                        <Header
                            firstLetterUppercase
                            label={translate(codes.feedbacksLabel)}
                            className={classes.feedbacksDetailPage__headLabel}
                        />
                    )
                }
                <Gallery
                    navigationClassname={classes.feedbacksDetailPage__navigationClassname}
                    galleryContainerClassName={classes.feedbacksGallery}
                    galleryDuplicateContainerClassName={classes.duplicateFeedbacksGallery}
                    items={feedbacks}
                    galleryOptions={{
                        galleryItemTemplate: feedbackTemplate,
                        galleryName: FEEDBACKS_GALLERY,
                        activeElement: 1,
                        autoPlaytime: 50000,
                        infiniteScroll: true,
                        allowDuplicateContainer: true
                    }}
                    allowNavigation
                />
            </BasePageLayoutRight>
        </BasePageLayout>
    );
};

export {FeedbacksDetailPage};
