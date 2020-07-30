import React, {useContext} from 'react';
import {useCanvas} from '../../App/hooks';
import {useGetDepartment} from './hooks';
import {isMobile} from "react-device-detect";
import {Image} from '../../../Admin/baseComponents/Image/Image';
import classes from './styles/index.module.scss';
import {DetailPageStaff} from './components/DetailPageStaff/DetailPageStaff';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import {AppContext} from '../../App/store';
import {codes} from '../../../static/translations/codes';
import {translate} from '../../../utils';

const DepartmentDetailPage = () => {
    const {languageCode} = useContext(AppContext);
    useCanvas();

    const {
        address,
        image,
        description,
        phone,
        staff
    } = useGetDepartment();

    const imageHeight = isMobile ? 370 : 418;

    return (
        <>
            <Image
                width="100%"
                height={imageHeight}
                className={classes.detailPage__image}
                alt='departmentImage'
                src={image.path}
            />
            <div className={classes.detailPage__header}>
                <div>
                    <Typography
                        variant='18'
                        displayBlock
                    >
                        {translate(codes.str)}. {address.street[languageCode]}, {address.number}
                    </Typography>
                    <Typography
                        className={classes.detailPage__phone}
                        variant='18'
                        displayBlock
                    >
                        <a href={"tel:" + phone}>{phone}</a>
                    </Typography>
                </div>
                <div className={classes.detailPage__headerRight}>
                    <Typography
                        variant='20'
                        displayBlock
                    >
                        {description[languageCode]}
                    </Typography>
                    <Typography
                        className={classes.detailPageHeaderList__header}
                    >
                        {translate(codes.team)}
                    </Typography>
                </div>
            </div>
            <DetailPageStaff staff={staff} />
        </>
    );
};

export {DepartmentDetailPage};
