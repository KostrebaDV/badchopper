import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import rightArrow from "../../../../../static/images/right_arrow.svg";

const GalleryDetailPageImagesShowMore = (
    {
        onClick,
        showOnMore
    }
) => {
    return (
        <div
            className={classes.galleryDetailPageImagesShowMore}
            onClick={onClick}
        >
            <Typography
                displayBlock
                letterSpacing='-1px'
                className={classes.galleryDetailPageImagesShowMore__text}
            >
                <span className={classes.galleryDetailPageImagesShowMore__count}>(+{showOnMore})</span>
                !!Посмотреть больше
            </Typography>
            <div className={classes.galleryDetailPageImagesShowMore__arrow}>
                <img src={rightArrow} alt="rightArrow"/>
            </div>
        </div>
    );
};

export {GalleryDetailPageImagesShowMore};
