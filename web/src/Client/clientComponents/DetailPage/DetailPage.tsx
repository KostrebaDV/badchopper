import React from 'react';
import {Route} from "react-router-dom";
import {NavigationMenu} from '../NavigationMenu/NavigationMenu';
import {Footer} from '../Footer/Footer';
import {DepartmentDetailPage} from '../DepartmentDetailPage/DepartmentDetailPage';
import {AssistancePage} from '../AssistancePage/AssistancePage';
import {ROUTES} from '../../App/routes';

const DetailPage = () => {

    return (
        <>
            <NavigationMenu />
            <Route path={ROUTES.DEPARTMENT_DETAIL}>
                <DepartmentDetailPage/>
            </Route>
            <Route path={ROUTES.ASSISTANCE_DETAIL}>
                <AssistancePage/>
            </Route>
            {/*<Route exact path="*">*/}
            {/*   !!!404!!!*/}
            {/*</Route>*/}
            <Footer/>
        </>
    );
};

export {DetailPage};
