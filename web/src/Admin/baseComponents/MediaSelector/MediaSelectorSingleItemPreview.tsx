import React from 'react';
import {MediaSelectorItem} from './MediaSelectorItem';
import {getUniqueKey, isNullOrUndefined} from '../../../utils';
import {Image} from '../Image/Image';

const MediaSelectorSingleItemPreview = (
    {
        mediaData,
        selectedItemId,
        showDeleteButton,
        handleDeleteProcessedImage
    }
) => {
    const currentItem = mediaData.find(mediaDataItem => selectedItemId === mediaDataItem._id);

    if (isNullOrUndefined(currentItem)) {
        return (
            <Image
                width={150}
                height={200}
                src={null}
                alt="no image"
            />
        );
    }

    return (
        <MediaSelectorItem
            key={getUniqueKey()}
            item={currentItem}
            showDeleteButton={showDeleteButton}
            handleDeleteProcessedImage={handleDeleteProcessedImage}
        />
    );
};

export {MediaSelectorSingleItemPreview};
