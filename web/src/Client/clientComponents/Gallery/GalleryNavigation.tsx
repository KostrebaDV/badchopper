import React from 'react';

import leftArrow from "../../../static/images/arrow_feedback_left.svg";
import rightArrow from "../../../static/images/arrow_feedback_right.svg";
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const GalleryNavigation = (
    {
        className,
        handleNext,
        handlePrev,
        allowIndex,
        allowNavigation,
        afterNavigationContent,
        totalItems: totalItemsFromProps,
        currentIndex: currentIndexFromProps
    }
) => {
    const currentIndex = currentIndexFromProps.toString().length === 1 ? `0${currentIndexFromProps}` : currentIndexFromProps;
    const totalItems = totalItemsFromProps.toString().length === 1 ? `0${totalItemsFromProps}` : totalItemsFromProps;

    const componentClassName = ClassNames(
        classes.galleryNavigation,
        className
    );

    const getAfterNavigationContent = () => {
        const AfterNavigationContent = afterNavigationContent;
        return <AfterNavigationContent />;
    };

    return (
        <div className={componentClassName}>
            {
                allowIndex && (
                    <Typography className={classes.galleryNavigation__count}>
                        <span className={classes.galleryNavigation__currentCount}>{currentIndex}</span> - {totalItems}
                    </Typography>
                )
            }
            {
                allowNavigation && (
                    <div
                        className={classes.galleryNavigation__navButtons}
                    >
                        <div
                            onClick={handlePrev}
                        >
                            <img src={leftArrow} alt="leftArrow"/>
                        </div>
                        <div
                            onClick={handleNext}
                            className={classes.galleryNavigation__navButtonRight}
                        >
                            <img src={rightArrow} alt="rightArrow"/>
                        </div>
                    </div>
                )
            }
            {
                afterNavigationContent && getAfterNavigationContent()
            }
        </div>
    );
};

GalleryNavigation.defaultProps = {
    allowIndex: true,
    allowNavigation: true,
    autoPlay: true,
};

export {GalleryNavigation};
