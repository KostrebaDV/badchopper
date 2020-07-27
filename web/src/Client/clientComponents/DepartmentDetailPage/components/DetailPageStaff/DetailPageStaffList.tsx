import React from 'react';
import Masonry from 'react-masonry-css';
import {DetailPageStaffListItem} from './detailPageStaffListItem';
import {getUniqueKey} from '../../../../../utils';
import './styles/detailPageStaffListMasonry.scss';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';

const DetailPageStaffList = (
    {
        staff
    }
) => {
    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1
    };

    return (
        <>
            <Typography
                className={classes.detailPageStaffList__header}
            >
                !!Команда
            </Typography>
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
        </>
    );
};

export {DetailPageStaffList};
