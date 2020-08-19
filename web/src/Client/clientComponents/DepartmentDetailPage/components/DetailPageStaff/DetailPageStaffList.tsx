import React from 'react';
import Masonry from 'react-masonry-css';
import {DetailPageStaffListItem} from './detailPageStaffListItem';
import {getUniqueKey} from '../../../../../utils';
import {isMobile} from "react-device-detect";
import './styles/detailPageStaffListMasonry.scss';
import {DetailPageStaffGallery} from './DetailPageStaffGallery';

const DetailPageStaffList = (
    {
        staff
    }
) => {
    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        800: 1
    };

    return (
        <>
            {
                !isMobile && (
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {
                            staff.map(item => {
                                return (
                                    <DetailPageStaffListItem
                                        item={item}
                                        key={getUniqueKey()}
                                    />
                                );
                            })
                        }
                    </Masonry>
                )
            }
            {
                isMobile && (
                    <DetailPageStaffGallery
                        staff={staff}
                    />
                )
            }

        </>
    );
};

export {DetailPageStaffList};
