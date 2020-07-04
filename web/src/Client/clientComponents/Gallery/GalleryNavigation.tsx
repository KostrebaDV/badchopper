import React, {useState} from 'react';

import leftArrow from "../../../static/images/left_arrow.svg";
import leftArrowHover from "../../../static/images/left_arrow_hover.svg";
import rightArrow from "../../../static/images/right_arrow.svg";
import rightArrowHover from "../../../static/images/right_arrow_hover.svg";
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
    const [leftNavButton, setLeftNavButton] = useState(leftArrow);
    const [rightNavButton, setRightNavButton] = useState(rightArrow);
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
                        {currentIndex} - {totalItems}
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
                            onMouseEnter={() => setLeftNavButton(leftArrowHover)}
                            onMouseLeave={() => setLeftNavButton(leftArrow)}
                        >
                            <img src={leftNavButton} alt="leftArrow"/>
                        </div>
                        <div
                            onMouseEnter={() => setRightNavButton(rightArrowHover)}
                            onMouseLeave={() => setRightNavButton(rightArrow)}
                            onClick={handleNext}
                            className={classes.galleryNavigation__navButtonRight}
                        >
                            <img src={rightNavButton} alt="rightArrow"/>
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
