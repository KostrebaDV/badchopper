import React, { FC } from 'react';

import {NavigationListItem} from './NavigationListItem';
import {NavigationListItemCollapse} from './NavigationListItemCollapse';

import { NavigationItemType, NavigationListProps } from './types';
import classes from './styles/index.module.scss';
import {getUniqueKey} from '../../../../../utils';

const NavigationList: FC<NavigationListProps> = (
    {
        navigationList
    }
) => {
    return (
        <div className={classes.adminNavigationList}>
            {
                navigationList.map((item: NavigationItemType) => {
                    const key = getUniqueKey(item.label);

                    return item.items.length === 0
                        ? <NavigationListItem key={key} item={item} />
                        : <NavigationListItemCollapse key={key} item={item}/>
                })
            }
        </div>
    );
};

export { NavigationList };
