import React from 'react';
import {MainPage} from '../clientComponents/MainPage/MainPage';
import classes from './styles/index.module.scss';
import {DetailPage} from '../clientComponents/DetailPage/DetailPage';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {ROUTES} from './routes';
import {isMobile} from "react-device-detect";
import {useGetDepartmentData, useSetLanguage} from './hooks';
import {AppContextProvider} from './store';
import ClassNames from 'classnames';
import {CookieNotification} from '../CookieNotification/CookieNotification';
import Cookies from 'js-cookie';
import {DepartmentDetailPage} from "../clientComponents/DepartmentDetailPage/DepartmentDetailPage";
import {AssistanceDetailPage} from "../clientComponents/AssistanceDetailPage/AssistanceDetailPage";
import {GalleryDetailPage} from "../clientComponents/GalleryDetailPage/GalleryDetailPage";
import {FeedbacksDetailPage} from "../clientComponents/FeedbacksDetailPage/FeedbacksDetailPage";
import {ContactDetailPage} from "../clientComponents/ContactDetailPage/ContactDetailPage";

const App = () => {
    const {pathname} = useLocation();
    const allowCookie = Cookies.get('allowCookie');

    useGetDepartmentData();
    useSetLanguage();

    const componentClassName = ClassNames(
        classes.app,
        {
            [classes.mainPageBg]: pathname === ROUTES.CLIENT_ROOT,
            [classes.departmentPageBg]: pathname.includes(ROUTES.DEPARTMENT_DETAIL) && !isMobile,
            [classes.departmentPageBg__mobile]: pathname.includes(ROUTES.DEPARTMENT_DETAIL) && isMobile,
            [classes.assistancePageBg]: pathname === ROUTES.ASSISTANCE_DETAIL && !isMobile,
            [classes.assistancePageBg__mobile]: pathname === ROUTES.ASSISTANCE_DETAIL && isMobile,
            [classes.feedbacksPageBg]: pathname === ROUTES.FEEDBACKS_DETAIL && !isMobile,
            [classes.feedbacksPageBg__mobile]: pathname === ROUTES.FEEDBACKS_DETAIL && isMobile,
            [classes.galleyPageBg__mobile]: pathname === ROUTES.GALLERY_DETAIL && isMobile,
            [classes.contactsPageBg]: pathname === ROUTES.CONTACT_DETAIL,
        }
    );

    return (
        <div className={componentClassName}>
            <div className={classes.app__content}>
                <Routes>
                    <Route path={ROUTES.CLIENT_ROOT}>
                        <MainPage/>
                    </Route>
                    <Route path={ROUTES.DEPARTMENT_DETAIL}>
                        <DepartmentDetailPage/>
                    </Route>
                    <Route path={ROUTES.ASSISTANCE_DETAIL}>
                        <AssistanceDetailPage/>
                    </Route>
                    <Route path={ROUTES.GALLERY_DETAIL}>
                        <GalleryDetailPage/>
                    </Route>
                    <Route path={ROUTES.FEEDBACKS_DETAIL}>
                        <FeedbacksDetailPage/>
                    </Route>
                    <Route path={ROUTES.CONTACT_DETAIL}>
                        <ContactDetailPage/>
                    </Route>
                </Routes>
            </div>
            {
                allowCookie === 'false' && (
                    <CookieNotification/>
                )
            }
        </div>
    );
};

const AppWithContext = () => {
    return (
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    );
};

export default AppWithContext;


