import React, { FC } from 'react';

import classes from './styles/index.module.scss';
import {AdminNavigationUserInfoIconTypes} from './types';

const NavigationUserInfoIcon: FC<AdminNavigationUserInfoIconTypes> = (
    {
        characterPreview
    }
) => {
    return (
        <div className={classes.adminNavigationUserInfoIcon}>
            {characterPreview}
        </div>
    );
};

export {NavigationUserInfoIcon};
