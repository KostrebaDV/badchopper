import React from 'react';

import classes from './styles/index.module.scss';

const EmptyContent = (
    {
        children
    }
) => {
    return (
        <div
            className={classes.emptyContent}
        >
            {children}
        </div>
    );
};

export {EmptyContent};
