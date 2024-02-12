import React from 'react';
import {Gallery} from '../../../Gallery/Gallery';
import classes from './styles/index.module.scss';
import {HOST} from '../../../../../const';
import './styles/mobileStaffGallery.scss';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';

const galleryItemTemplate = ({item, index}, galleryName) => {
    return ` <div
                class="${galleryName}-item index-${index}"
                data-index="${index}"
            >
                <img
                    class="${galleryName}-item__image"
                    src="${HOST}${item.image.path}"
                    data-index="${index}"
                >
                 <a href="${item.instagramUrl}" target="_blank">
                    <div class="${galleryName}-item__name">
                        ${item.name} ${item.surname} 
                         <img
                                class="${galleryName}-item__insta-image"
                                src="images/insta_icon.png"
                                alt="instaIcon"
                            />
                    </div>
                </a>
                <div class="${galleryName}-item__description">
                    ${item.description}
                </div>
                 <div data-index="${index}" class="${galleryName}-item__reserve-button">
                    <a href="${item.yClientsUrl}" target="_blank">${translate(codes.bookNow)}</a>
                </div>
            </div>`;
};

const DetailPageStaffGallery = (
    {
        staff
    }
) => {
    return (
        <Gallery
            items={staff}
            galleryOptions={{
                galleryItemTemplate: galleryItemTemplate,
                galleryName: 'mobileStaffGallery',
                activeElement: 1,
                infiniteScroll: true,
                allowDuplicateContainer: false
            }}
            navigationClassname={classes.detailPageStaffGallery_navigation}
            allowNavigation
        />
    );
};

export {DetailPageStaffGallery};
