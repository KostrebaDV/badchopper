import React, {useEffect} from 'react';
import classes from './styles/index.module.scss';
import {GalleryNavigation} from './GalleryNavigation';
import ClassNames from 'classnames';
import {
    initGallery,
    handleNext as handleNextItem,
    handlePrev as handlePrevItem, destroyGallery
} from './utils';
import {useSetActiveIndex} from './hooks';

const Gallery = (
    {
        items,
        galleryOptions,
        allowNavigation,
        navigationClassname,
        galleryDuplicateContainerClassName,
        galleryContainerClassName,
        afterNavigationContent
    }
) => {
    const {setActiveIndex, activeIndex} = useSetActiveIndex(galleryOptions.activeElement);

    useEffect(() => {
        if (items.length !== 0) {
            initGallery(
                items,
                galleryOptions,
                setActiveIndex
            );

            return () => destroyGallery();
        }
    }, [items, galleryOptions, setActiveIndex]);


    const handlePrev = () => {
        if (activeIndex === 1) {
            return handlePrevItem({
                index: items.length,
                options: galleryOptions,
                setActiveIndex: setActiveIndex,
                clearGalleryInterval: true
            });
        }

        handlePrevItem({
                index: activeIndex -1,
                options: galleryOptions,
                setActiveIndex: setActiveIndex,
                clearGalleryInterval: true
            });
    };

    const handleNext = () => {
        if (activeIndex >= items.length) {
            return handleNextItem({
                index: 1,
                options: galleryOptions,
                setActiveIndex: setActiveIndex,
                clearGalleryInterval: true
            });
        }

        handleNextItem({
            index: activeIndex + 1,
            options: galleryOptions,
            setActiveIndex: setActiveIndex,
            clearGalleryInterval: true
        });
    };

    const componentClassName = ClassNames(
        classes.gallery,
        'galleryContainer',
        galleryOptions.galleryName,
        galleryContainerClassName
    );

    const duplicateClassName = ClassNames(
        galleryDuplicateContainerClassName,
        'galleryDuplicateContainer',
    );

    return (
        <>
            <div className={componentClassName}></div>
            <div className={duplicateClassName}></div>
            <GalleryNavigation
                handlePrev={handlePrev}
                handleNext={handleNext}
                totalItems={items.length}
                currentIndex={activeIndex}
                className={navigationClassname}
                allowNavigation={allowNavigation}
                afterNavigationContent={afterNavigationContent}
            />
        </>
    );
};

Gallery.defaultProps = {
    navigationClassname: '',
    galleryContainerClassName: '',
    galleryDuplicateContainerClassName: '',
    afterNavigationContent: null
};

export {Gallery};
