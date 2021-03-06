import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import rightArrow from "../../../../../static/images/arrow_feedback_right.svg";
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';

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
                {translate(codes.seeMore)}
                <span className={classes.galleryDetailPageImagesShowMore__arrow}>
                    <img src={rightArrow} alt="rightArrow"/>
                </span>
            </Typography>
        </div>
    );
};

export {GalleryDetailPageImagesShowMore};
