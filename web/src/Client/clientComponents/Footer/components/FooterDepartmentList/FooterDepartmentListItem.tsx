import React, {useContext} from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import positionSvg from "../../../../../static/images/position.svg";
import ClassNames from 'classnames';
import {AppContext} from '../../../../App/store';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {Link} from '../../../../../Admin/baseComponents/Link/Link';

const FooterDepartmentListItem = (
    {
        item,
        isContactPage,
        onDepartmentClick
    }
) => {
    const {languageCode} = useContext(AppContext);
    const componentClassName = ClassNames(
        {
            [classes.footerDepartmentListItem]: !isContactPage,
            [classes.footerDepartmentListItem_contactPage]: isContactPage
        }
    );

    const labelClassName = ClassNames(
        {
            [classes.footerDepartmentListItem__label]: !isContactPage,
            [classes.footerDepartmentListItem__label_contactPage]: isContactPage
        }
    );

    return (
        <div className={componentClassName}>
            <div>
                <div
                    onClick={() => onDepartmentClick(item.publicId)}
                >
                    <Typography
                        letterSpacing="-0.01em"
                        displayBlock
                        variant="24"
                        className={labelClassName}
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
                    className={classes.footerDepartmentListItem__phone}
                >
                    <a href={"tel:" + item.phone}>{item.phone}</a>
                </Typography>
            </div>
            <div className={classes.footerDepartmentListItem__geoPosition}>
                <Typography
                    variant="12"
                    className={classes.footerDepartmentListItem__geoPositionLabel}
                    letterSpacing="-0.005em"
                >
                    <Link
                        target="_blank"
                        hasRoute={false}
                        link={item.location}
                    >
                        Google maps
                    </Link>
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
