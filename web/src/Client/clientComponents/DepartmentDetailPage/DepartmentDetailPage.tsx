import React, {useContext} from 'react';
import {useGetDepartment} from './hooks';
import {isMobile} from "react-device-detect";
import {Image} from '../../../Admin/baseComponents/Image/Image';
import classes from './styles/index.module.scss';
import {DetailPageStaff} from './components/DetailPageStaff/DetailPageStaff';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import {AppContext} from '../../App/store';
import {codes} from '../../../static/translations/codes';
import {translate} from '../../../utils';
import {BasePageLayout} from '../BasePageLayout/BasePageLayout';
import {BasePageLayoutLeft} from '../BasePageLayout/BasePageLayoutLeft';
import {BasePageLayoutRight} from '../BasePageLayout/BasePageLayoutRight';
import {FormButton} from '../FormButton/FormButton';

const DepartmentDetailPage = () => {
    const {languageCode} = useContext(AppContext);

    const {
        address,
        image,
        description,
        phone,
        staff,
        departmentYClients
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
            <BasePageLayout className={classes.detailPage__header}>
                <BasePageLayoutLeft>
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
                </BasePageLayoutLeft>
                <BasePageLayoutRight className={classes.detailPage__headerRight}>
                    <Typography
                        variant='20'
                        displayBlock
                    >
                        {description[languageCode]}
                    </Typography>
                    {
                        departmentYClients && (
                            <FormButton
                                label={translate(codes.bookUpOnlineRightNow)}
                                onClick={() => window.open(departmentYClients, '_blank')}
                                labelUppercase
                                className={classes.detailPage__bookButton}
                            />
                        )
                    }
                </BasePageLayoutRight>
            </BasePageLayout>
            <Typography
                className={classes.detailPageHeaderList__header}
            >
                {translate(codes.team)}
            </Typography>
            <DetailPageStaff staff={staff} />
        </>
    );
};

export {DepartmentDetailPage};
