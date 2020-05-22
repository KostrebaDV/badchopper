import React from 'react';

import classes from './styles/index.module.scss';

const ContentHeaderLeft = (
    {
        children
    }
) => {
    return (
        <div className={classes.contentHeaderLeft}>
            {children}
        </div>
    );
};

export {ContentHeaderLeft};
