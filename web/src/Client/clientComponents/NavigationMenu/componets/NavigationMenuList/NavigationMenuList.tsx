import React from 'react';
import classes from './styles/index.module.scss';
import menuList from './const';
import {NavigationMenuListItem} from './NavigationMenuListItem';
import {getUniqueKey} from '../../../../../utils';

const NavigationMenuList = () => {
    return (
        <div className={classes.navigationMenuList}>
            {
                menuList.map(item => {
                    return (
                        <NavigationMenuListItem
                            key={getUniqueKey()}
                            item={item}
                        />
                    )
                })
            }
        </div>
    );
};

export {NavigationMenuList};
