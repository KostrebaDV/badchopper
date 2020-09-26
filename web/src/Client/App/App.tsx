import React, {useContext} from 'react';
import {MainPage} from '../clientComponents/MainPage/MainPage';
import classes from './styles/index.module.scss';
import {DetailPage} from '../clientComponents/DetailPage/DetailPage';
import {Route, useLocation} from "react-router-dom";
import {ROUTES} from './routes';
import {isMobile} from "react-device-detect";
import {useGetDepartmentData, useGetTranslations, useSetLanguage, useGetSyncHASH} from './hooks';
import {AppContext, AppContextProvider} from './store';
import ClassNames from 'classnames';

const App = () => {
    const {pathname} = useLocation();
    const {setLanguageCode} = useContext(AppContext);

    const allowReloadData = useGetSyncHASH();

    useGetDepartmentData();
    useGetTranslations(allowReloadData);
    useSetLanguage(setLanguageCode);

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
            [classes.contactsPageBg]: pathname === ROUTES.CONTACT_DETAIL,
        }
    );

    return (
        <div className={componentClassName}>
            <div className={classes.app__content}>
                <Route exact path={ROUTES.CLIENT_ROOT}>
                    <MainPage/>
                </Route>
                <Route path={[
                    ROUTES.ASSISTANCE_DETAIL,
                    ROUTES.DEPARTMENT_DETAIL,
                    ROUTES.FEEDBACKS_DETAIL,
                    ROUTES.GALLERY_DETAIL,
                    ROUTES.CONTACT_DETAIL
                ]}>
                    <DetailPage/>
                </Route>
            </div>
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


