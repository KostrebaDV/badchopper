import React from 'react';

import {PaddingBox} from '../../../../baseComponents/PaddingBox/PaddingBox';
import {NavigationUserInfoIcon} from './NavigationUserInfoIcon';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {MarginBox} from '../../../../baseComponents/MarginBox/MarginBox';

import classes from './styles/index.module.scss';

//to delete
import data from '../../testData';
//to delete

const NavigationUserInfo = () => {
    return (
        <PaddingBox
            hrNormal
            vrSmall
            className={classes.adminNavigationUserInfo}
        >
            <NavigationUserInfoIcon
                characterPreview={data.user.name.charAt(0)}
            />
            <Typography>
                <MarginBox tUltraTiny>
                    {data.user.name}
                </MarginBox>
            </Typography>
        </PaddingBox>
    );
};

export { NavigationUserInfo };
