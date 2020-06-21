import React from 'react';
import classes from './styles/index.module.scss';

const TabsItemList = (
    {
        children
    }
) => {
    return (
        <div
            className={classes.tabsItemList}
        >
            {children}
        </div>
    );
};

export {TabsItemList};
