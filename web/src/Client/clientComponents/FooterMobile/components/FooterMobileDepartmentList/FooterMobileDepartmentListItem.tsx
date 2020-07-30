import React, {useContext} from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import positionSvg from "../../../../../static/images/position.svg";
import ClassNames from 'classnames';
import {AppContext} from '../../../../App/store';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';

const FooterMobileDepartmentListItem = (
    {
        item,
        isContactPage,
        onDepartmentClick
    }
) => {
    const {languageCode} = useContext(AppContext);
    const componentClassName = ClassNames(
        {
            [classes.footerMobileDepartmentListItem]: !isContactPage,
            [classes.footerMobileDepartmentListItem_contactPage]: isContactPage
        }
    );

    return (
        <div className={componentClassName}>
            <div
                className={classes.footerMobileDepartmentListItem__leftSection}
            >
                <div
                    onClick={() => onDepartmentClick(item.publicId)}
                >
                    <Typography
                        letterSpacing="-0.01em"
                        displayBlock
                        variant="24"
                        className={classes.footerMobileDepartmentListItem__label}
                    >
                        {item.name}
                    </Typography>
                </div>
                <Typography
                    variant="14"
                    displayBlock
                >
                    {translate(codes.str)}. {item.address.street[languageCode]}, {item.address.number}
                </Typography>
                <Typography
                    variant="14"
                    displayBlock
                    className={classes.footerMobileDepartmentListItem__phone}
                >
                    <a href={"tel:" + item.phone}>{item.phone}</a>
                </Typography>
            </div>
            <div className={classes.footerMobileDepartmentListItem__geoPosition}>
                <Typography
                    variant="12"
                    className={classes.footerMobileDepartmentListItem__geoPositionLabel}
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

export {FooterMobileDepartmentListItem};
