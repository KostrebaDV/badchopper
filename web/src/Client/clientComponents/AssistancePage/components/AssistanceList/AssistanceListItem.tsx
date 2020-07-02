import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import arrow from "../../../../../static/images/arrow.svg";
import {Image} from '../../../../../Admin/baseComponents/Image/Image';

const AssistanceListItem = (
    {
        item,
        index
    }
) => {
    return (
        <div className={classes.assistanceListItem}>
            <div className={classes.assistanceListItem__leftSide}>
                <Typography
                    displayBlock
                    className={classes.assistanceListItem__index}
                >
                    0{index}
                </Typography>
                <Typography
                    className={classes.assistanceListItem__name}
                >
                    {item.name}
                </Typography>
            </div>
            <div className={classes.assistanceListItem__rightSide}>
                <Typography
                    className={classes.assistanceListItem__price}
                >
                    {item.price}
                </Typography>
                <img
                    className={classes.assistanceListItem__arrow}
                    src={arrow}
                    alt="arrow"
                />
            </div>
            <Image
                className={classes.assistanceListItem__image}
                height={313}
                src={item.image.path}
                alt={item.image.name}
            />
        </div>
    );
};

export {AssistanceListItem};
