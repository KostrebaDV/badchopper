import React from 'react';
import {ContactDetailPageLeftSide} from './components/ContactDetailPageLeftSide/ContactDetailPageLeftSide';
import {ContactDetailPageRightSide} from './components/ContactDetailPageRightSide/ContactDetailPageRightSide';
import classes from './styles/index.module.scss';
import {BasePageLayout} from '../BasePageLayout/BasePageLayout';
import planetImg from "../../../static/images/planet.png";
import {isMobile} from "react-device-detect";

const ContactDetailPage = () => {
    return (
        <>
            <BasePageLayout className={classes.contactDetailPage}>
                <ContactDetailPageLeftSide/>
                <ContactDetailPageRightSide/>
            </BasePageLayout>
            {
                !isMobile && (
                    <img
                        className={classes.contactDetailPage_planeImg}
                        src={planetImg} alt="planetImg"
                    />
                )
            }
        </>

    );
};

export {ContactDetailPage};
