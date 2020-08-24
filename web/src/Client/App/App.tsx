import React, {useContext} from 'react';
import {MainPage} from '../clientComponents/MainPage/MainPage';
import classes from './styles/index.module.scss';
import {DetailPage} from '../clientComponents/DetailPage/DetailPage';
import {Route, useLocation} from "react-router-dom";
import {ROUTES} from './routes';
import {useGetDepartmentData, useGetTranslations, useSetLanguage, useGetSyncHASH} from './hooks';
import {AppContext, AppContextProvider} from './store';
import ClassNames from 'classnames';

const App = () => {
    const {pathname} = useLocation();
    const {setLanguageCode} = useContext(AppContext);

    const allowReloadData = useGetSyncHASH();

    useGetDepartmentData(allowReloadData);
    useGetTranslations(allowReloadData);
    useSetLanguage(setLanguageCode);

    const componentClassName = ClassNames(
        classes.app,
        {
            [classes.mainPageBg]: pathname === ROUTES.CLIENT_ROOT,
            [classes.departmentPageBg]: pathname.includes(ROUTES.DEPARTMENT_DETAIL),
            [classes.assistancePageBg]: pathname === ROUTES.ASSISTANCE_DETAIL,
            [classes.feedbacksPageBg]: pathname === ROUTES.FEEDBACKS_DETAIL
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


