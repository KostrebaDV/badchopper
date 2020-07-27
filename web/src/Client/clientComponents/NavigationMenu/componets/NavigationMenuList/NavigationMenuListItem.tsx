import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import {NavigationMenuContext} from '../../store/const';

const NavigationMenuListItem = (
    {
        item
    }
) => {
    const {openNavigation} = useContext(NavigationMenuContext);

    return (
        <Link
            link={item.link}
        >
            <div
                onClick={() => openNavigation(false)}
                className={classes.navigationMenuListItem}
            >
                <div className={classes.navigationMenuListItem__index}>{item.index}</div>
                <div className={classes.navigationMenuListItem__label}>{item.label}</div>
            </div>
        </Link>
    );
};

export {NavigationMenuListItem};
