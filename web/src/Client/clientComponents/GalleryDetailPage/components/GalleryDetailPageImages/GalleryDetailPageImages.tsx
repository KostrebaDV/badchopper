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

    const GridLayoutRowColumn = isMobile ? 1 : 3;

    return (
        <GridLayoutRow
            gridColumn={GridLayoutRowColumn}
            gridGap="20px"
            className={classes.galleryDetailPageImages}
        >
            {
                items.map(item => {
                    if (item.isLast) {
                        return (
                            <GalleryDetailPageImagesShowMore
                                showOnMore={showOnMore}
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
