import React from 'react';
import {Image} from '../../../../../Admin/baseComponents/Image/Image';
import classes from './styles/index.module.scss';

const GalleryDetailPageImagesItem = (
    {
        item
    }
) => {
    return (
        <Image
            src={item.path}
            alt={item.name}
            className={classes.galleryDetailPageImagesItem}
        />
    );
};

export {GalleryDetailPageImagesItem};
