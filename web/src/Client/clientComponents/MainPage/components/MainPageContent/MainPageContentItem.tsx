import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {Image} from '../../../../../Admin/baseComponents/Image/Image';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import {ROUTE} from '../../../../const';

const MainPageContentItem = (
    {
        item
    }
) => {
    const componentClassName = ClassNames(
        classes.mainPageContentItem,
        "link"
    );

    return (
            //@ts-ignore
            <Link link={`${ROUTE.DEPARTMENT_DETAIL}${item.name}`} className={componentClassName}>
                <Image
                    src={item.image.path}
                    alt={item.name}
                    className={classes.mainPageContentItem_image}
                />
                <Typography
                    bold='600'
                    variant='82'
                    className={classes.mainPageContentItem__label}
                >
                    {item.name}
                </Typography>
                <Typography
                    variant='18'
                    className={classes.mainPageContentItem__address}
                >
                    !!ул. {item.address.street}, {item.address.number}
                </Typography>
            </Link>
    );
};

export {MainPageContentItem};
