import React from 'react';

import classes from './styles/index.module.scss';

const ContentFooter = (
    {
        children,
    }
) => {
    return (
        <div
            className={classes.contentFooter}
        >
            { children }
        </div>
    );
};

export {ContentFooter};
