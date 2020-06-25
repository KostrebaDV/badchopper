import React from 'react';
import {Image} from '../../../../../Admin/baseComponents/Image/Image';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const DetailPageStaffListItem = (
    {
        item
    }
) => {
    const componentClassName = ClassNames(
        classes.detailPageStaffListItem
    );

    return (
        <div className={componentClassName}>
            <Image
                width='100%'
                height={390}
                src={item.image.path}
                alt={`${item.name} ${item.surname}`}
                className={classes.detailPageStaffListItem__image}
            />
            <Typography
                variant='20'
                upperCase
                bold='600'
                displayBlock
                className={classes.detailPageStaffListItem__name}
            >
                {item.name} {item.surname}
            </Typography>
            <Typography
                className={classes.detailPageStaffListItem__description}
                displayBlock
            >
                {item.description}
            </Typography>
        </div>
    );
};

export {DetailPageStaffListItem};
