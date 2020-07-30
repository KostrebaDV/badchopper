import React, {useEffect, useState} from 'react';

import {PaddingBox} from '../../../../baseComponents/PaddingBox/PaddingBox';
import {NavigationUserInfoIcon} from './NavigationUserInfoIcon';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {MarginBox} from '../../../../baseComponents/MarginBox/MarginBox';
import Cookies from 'js-cookie';

import classes from './styles/index.module.scss';

import {decodeToken} from '../../../../../utils/decodeToken';
import {isNullOrUndefined} from '../../../../../utils';
import {Icon} from '@iconify/react';
import logoutIcon from '@iconify/icons-mdi/logout';
import {logout} from '../../api';

const NavigationUserInfo = () => {
    const token = Cookies.get('access_token');
    const [userInfo, setUserInfo] = useState({
        name: 'U',
        surname: 'U',
    });

    useEffect(() => {
        if (!isNullOrUndefined(token)) {
            const {name, surname} = decodeToken(token);

            setUserInfo({
                name,
                surname
            });
        }
    }, [token]);

    const handleLogout = () => {
        logout()
            .then(({data}) => {
                window.location = data.location;
            })
    };

    return (
        <PaddingBox
            lNormal
            rSmall
            vrSmall
            className={classes.adminNavigationUserInfo}
        >
            <div className={classes.adminNavigationUserLeftSide}>
                <NavigationUserInfoIcon
                    characterPreview={userInfo.name.charAt(0)}
                />
                <Typography>
                    <MarginBox tUltraTiny>
                        {userInfo.name}&nbsp;
                        {userInfo.surname}
                    </MarginBox>
                </Typography>
            </div>
            <div
                className={classes.adminNavigationUserLogout}
                onClick={handleLogout}
            >
                <Icon
                    icon={logoutIcon}
                />
            </div>
        </PaddingBox>
    );
};

export { NavigationUserInfo };
