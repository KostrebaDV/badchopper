import React from 'react';
import {NavigationListItem} from './NavigationListItem';
import classes from './styles/index.module.scss';

const NavigationListCollapseSection = (
    {
        items
    }
) => {
    return (
        <div className={classes.navigationListCollapseSection}>
            {
                items.map(item => {
                    return (
                        <NavigationListItem
                            key={item.id}
                            item={item}
                            className={classes.navigationListCollapseSection__item}
                            activeLinkClass={classes.navigationListCollapseSection__activeItem}
                        />
                    )
                })
            }
        </div>
    );
};

export {NavigationListCollapseSection};
