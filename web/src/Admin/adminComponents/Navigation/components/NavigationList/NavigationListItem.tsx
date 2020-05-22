import React from 'react';
import {Typography} from '../../../../baseComponents/Typography/Typography';

import { Icon } from "@iconify/react";
import classes from './styles/index.module.scss';
import {Link} from '../../../../baseComponents/Link/Link';
import {getNavigationItemIcon} from '../../utils';
import ClassNames from 'classnames'

const NavigationListItem = (
    {
        item,
        className,
        activeLinkClass
    }
) => {
    const componentClassName = ClassNames(
        classes.adminNavigationListItem,
        className
    );

    return (
        <Link
            link={item.route}
            activeLinkClass={activeLinkClass}
            className={componentClassName}
        >

                <Icon
                    icon={getNavigationItemIcon(item.icon)}
                    className={classes.adminNavigationList__icon}
                />
                <Typography
                    variant="14"
                    className={classes.adminNavigationList__label}
                >
                    { item.label }
                </Typography>
        </Link>
    );
};

NavigationListItem.defaultProps = {
    activeLinkClass: classes.adminNavigationListItem__activeItem,
    className: ''
};

export {NavigationListItem};
