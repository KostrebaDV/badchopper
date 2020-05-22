import React from 'react';

import classes from './styles/index.module.scss';

const ContentHeaderRight = (
    {
        children
    }
) => {
    return (
        <div className={classes.contentHeaderRight}>
            {children}
        </div>
    );
};

export {ContentHeaderRight};
