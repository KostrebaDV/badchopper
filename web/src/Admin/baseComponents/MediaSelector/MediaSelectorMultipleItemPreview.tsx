import React from 'react';
import {MediaSelectorItem} from './MediaSelectorItem';
import {getUniqueKey} from '../../../utils';
import {GridLayoutRow} from '../GridLayout';

const MediaSelectorMultipleItemPreview = (
    {
        mediaData,
        selectedItemId,
        showDeleteButton,
        handleDeleteProcessedImage
    }
) => {
    return (
        <GridLayoutRow
            gridColumn={4}
        >
            {
                selectedItemId.map(item => {
                    const currentItem = mediaData.find(mediaDataItem => item === mediaDataItem._id);

                    return (
                        <MediaSelectorItem
                            width={100}
                            height={100}
                            item={currentItem}
                            key={getUniqueKey()}
                            showDeleteButton={showDeleteButton}
                            handleDeleteProcessedImage={handleDeleteProcessedImage}
                        />
                    );
                })
            }
        </GridLayoutRow>
    );
};

export {MediaSelectorMultipleItemPreview};
