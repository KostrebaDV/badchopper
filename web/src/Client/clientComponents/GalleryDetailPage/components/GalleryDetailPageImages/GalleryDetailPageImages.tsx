import React from 'react';
import {GridLayoutRow} from '../../../../../Admin/baseComponents/GridLayout';
import {GalleryDetailPageImagesItem} from './GalleryDetailPageImagesItem';
import {getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';
import {isMobile} from "react-device-detect";
import {useNormalizeImageItems} from './hooks';
import {GalleryDetailPageImagesShowMore} from './GalleryDetailPageImagesShowMore';

const GalleryDetailPageImages = (
    {
        items: itemsFromProps,
        showOnMore,
        showOnInit
    }
) => {
    const {
        items,
        showMore,
        showCount
    } = useNormalizeImageItems({
        itemsFromProps,
        showOnInit
    });

    const gridLayoutRowColumn = isMobile ? 1 : 3;
    const itemsToShowCount = itemsFromProps.length - showCount >= 3 ? 3 : itemsFromProps.length - showCount;

    return (
        <GridLayoutRow
            gridColumn={gridLayoutRowColumn}
            gridGap="20px"
            className={classes.galleryDetailPageImages}
        >
            {
                items.map(item => {
                    if (item.isLast) {
                        return (
                            <GalleryDetailPageImagesShowMore
                                showOnMore={itemsToShowCount}
                                key={getUniqueKey()}
                                onClick={() => showMore(showCount + showOnMore)}
                            />
                        );
                    }

                    return (
                        <GalleryDetailPageImagesItem
                            item={item}
                            key={getUniqueKey()}
                        />
                    );
                })
            }
        </GridLayoutRow>
    );
};

export {GalleryDetailPageImages};
