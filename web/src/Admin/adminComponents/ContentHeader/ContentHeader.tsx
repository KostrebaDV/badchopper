import React from 'react';

import classes from './styles/index.module.scss';
import {PaddingBox} from '../../baseComponents/PaddingBox/PaddingBox';

const ContentHeader = (
    {
        children
    }
) => {
    return (
        <PaddingBox
            lNormal
            vrNormal
            rSmall
            className={classes.contentHeader}
        >
            {children}
        </PaddingBox>
    );
};

export {ContentHeader};
