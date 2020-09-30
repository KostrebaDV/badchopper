import React, {useContext} from 'react';
import {NavigationMenuContext} from '../../store/const';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import {ROUTES} from '../../../../App/routes';
import {codes} from '../../../../../static/translations/codes';
import {translate} from '../../../../../utils';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import {yClientsUrl} from '../../../../../const';

const NavigationMenuTopBar = () => {
    const {isOpen, openNavigation} = useContext(NavigationMenuContext);

    return (
        <div className={classes.navigationMenuTopBar}>
            <div onClick={() => openNavigation(!isOpen)}>
                <Typography
                    bold="700"
                    variant="14"
                    className={classes.navigationMenuTopBar__button}
                >
                    {translate(codes.menu)}
                </Typography>
            </div>
            <Typography
                variant="14"
                bold="700"
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
            <Link
                activeLinkClass={classes.navigationMenuTopBar__button_active}
                className={classes.navigationMenuTopBar__button}
                link={ROUTES.CONTACT_DETAIL}
            >
                <Typography
                    bold="700"
                    variant="14"
                >
                    {translate(codes.leaveFeedback)}
                </Typography>
            </Link>
        </div>
    );
};

export {NavigationMenuTopBar};
