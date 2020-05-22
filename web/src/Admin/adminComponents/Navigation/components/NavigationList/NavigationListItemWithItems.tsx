import React, { useMemo, useCallback } from 'react';
import {Typography} from '../../../../baseComponents/Typography/Typography';

import chevronDown from '@iconify/icons-mdi/chevron-down';
import chevronRight from '@iconify/icons-mdi/chevron-right';
import { Icon } from "@iconify/react";
import classes from './styles/index.module.scss';
import {getNavigationItemIcon} from '../../utils';
import ClassNames from 'classnames';
import {Link} from '../../../../baseComponents/Link/Link';

const NavigationListItemWithItems = (
    {
        item,
        open,
        setOpen
    }
) => {
    const collapseIcon = open ? chevronDown : chevronRight;
    const componentClassName = ClassNames(
            {
                [classes.navigationListItemWithItems_open]: open

            },
        classes.navigationListItemWithItems
    );

    const handleCollapseIconClick = useCallback((e) => {
        e.preventDefault();
        setOpen(!open);
    }, [setOpen, open]);

    const linkContent = useMemo(() => {
        return (
            <>
                <div className={classes.navigationListItemWithItems__leftSection}>
                    <Icon
                        icon={getNavigationItemIcon(item.icon)}
                        className={classes.adminNavigationList__icon}
                    />
                    <Typography
                        variant="14"
                    >
                        { item.label }
                    </Typography>
                </div>
                <div onClick={handleCollapseIconClick}>
                    <Icon
                        icon={collapseIcon}
                        className={classes.navigationListItemWithItems__iconCollapse}
                    />
                </div>
            </>
        );
    }, [handleCollapseIconClick, collapseIcon, item.icon, item.label]);

    return item.hasRoute ?
        (
            <Link
                link={item.route}
                className={componentClassName}
                activeLinkClass={classes.adminNavigationListItem__activeItem}
            >
                {linkContent}
            </Link>
        ) : (
            <div
                onClick={handleCollapseIconClick}
                className={componentClassName}
            >
                {linkContent}
            </div>
        )
};

export {NavigationListItemWithItems};
