import React from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import positionSvg from "../../../../../static/images/position.svg";
import {ROUTES} from '../../../../App/routes';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';
import ClassNames from 'classnames';

const FooterDepartmentListItem = (
    {
        item,
        isContactPage
    }
) => {
    const componentClassName = ClassNames(
        {
            [classes.footerDepartmentListItem]: !isContactPage,
            [classes.footerDepartmentListItem_contactPage]: isContactPage
        }
    );

    return (
        <div className={componentClassName}>
            <Link link={`${ROUTES.DEPARTMENT_DETAIL}${item.publicId}`}>
                <Typography
                    letterSpacing="-0.01em"
                    displayBlock
                    variant="24"
                    className={classes.footerDepartmentListItem__label}
                >
                    {item.name}
                </Typography>
            </Link>
            <Typography
                variant="14"
                displayBlock
            >
                !ул. {item.address.street}, {item.address.number}
            </Typography>
            <Typography
                variant="14"
                displayBlock
            >
                {item.phone}
            </Typography>
            <div className={classes.footerDepartmentListItem__geoPosition}>
                <Typography
                    variant="12"
                    className={classes.footerDepartmentListItem__geoPositionLabel}
                    letterSpacing="-0.005em"
                >
                    Google maps
                </Typography>
                <img
                    src={positionSvg}
                    alt="scissors"
                />
            </div>
        </div>
    );
};

export {FooterDepartmentListItem};
