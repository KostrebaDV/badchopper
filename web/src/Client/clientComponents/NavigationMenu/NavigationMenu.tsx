import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {isBrowser, isMobile} from "react-device-detect";
import {NavigationMenuContentWrapperMobile} from '../NavigationMenuContentWrapperMobile/NavigationMenuContentWrapperMobile';
import {NavigationMenuProvider} from './store/NavigationMenuProvider';
import {NavigationMenuTopBar} from './componets/NavigationMenuTopBar/NavigationMenuTopBar';
import {NavigationMenuButtonIcon} from './componets/NavigationMenuButtonIcon/NavigationMenuButtonIcon';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import {NavigationMenuContext} from './store/const';
import {NavigationMenuContentWrapper} from '../NavigationMenuContentWrapper/NavigationMenuContentWrapper';
import {NavigationMenuList} from './componets/NavigationMenuList/NavigationMenuList';
import {translate} from '../../../utils';
import {codes} from '../../../static/translations/codes';
import {yClientsUrl} from '../../../const';
import {Link} from '../../../Admin/baseComponents/Link/Link';

const NavigationMenu = () => {
    const {isOpen} = useContext(NavigationMenuContext);

    return (
        <div className={classes.navigationMenu}>
            <Logo/>
            {
                isBrowser && (
                    <NavigationMenuTopBar/>
                )
            }
            {
                isMobile && (
                    <div className={classes.navigationMenuMobile}>
                        <div
                            className={classes.navigationMenuMobile__signInButton}
                            onClick={() => {
                                // @ts-ignore
                                console.log('call y-clients');
                            }}
                        >
                            <Typography
                                variant="14"
                                className={classes.navigationMenuTopBar__button}
                            >
                                <Link
                                    target="_blank"
                                    hasRoute={false}
                                    link={yClientsUrl}
                                >
                                    {translate(codes.bookNow)}
                                </Link>
                            </Typography>
                        </div>
                        <NavigationMenuButtonIcon/>
                    </div>
                )
            }
            {
                isBrowser && (
                    <NavigationMenuContentWrapper
                        isOpen={isOpen}
                        render={NavigationMenuList}
                    />
                )
            }
            {
                isMobile && (
                    <NavigationMenuContentWrapperMobile
                        isOpen={isOpen}
                        render={NavigationMenuList}
                    />
                )
            }
        </div>
    );
};

const NavigationMenuWithProvider = () => {
    return (
        <NavigationMenuProvider>
            <NavigationMenu />
        </NavigationMenuProvider>
    );
};

export {NavigationMenuWithProvider};
