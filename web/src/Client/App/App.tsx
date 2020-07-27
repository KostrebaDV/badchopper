import React from 'react';
import {MainPage} from '../clientComponents/MainPage/MainPage';
import classes from './styles/index.module.scss';
import {DetailPage} from '../clientComponents/DetailPage/DetailPage';
import {Route} from "react-router-dom";
import {ROUTES} from './routes';
import {useGetDepartmentData} from './hooks';
import {AppContextProvider} from './store';

const App = () => {
    useGetDepartmentData();

    return (
        <div className={classes.app}>
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


