import React from 'react';
import {DetailPageStaffListItem} from './detailPageStaffListItem';
import {getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {GridLayoutRow} from '../../../../../Admin/baseComponents/GridLayout';

const DetailPageStaffList = (
    {
        staff,
        active
    }
) => {
    const componentClassName = ClassNames(
        classes.detailPageStaffList,
        {
            [classes.detailPageStaffList__transparent]: !active
        }
    );

    return (
        <GridLayoutRow
            gridColumn={4}
            gridGap='20px'
            className={componentClassName}
        >
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
        </GridLayoutRow>
    );
};

export {DetailPageStaffList};
