import React from 'react';
import {Route} from "react-router-dom";
import {NavigationMenu} from '../NavigationMenu/NavigationMenu';
import {Footer} from '../Footer/Footer';
import {DepartmentDetailPage} from '../DepartmentDetailPage/DepartmentDetailPage';
import {AssistanceDetailPage} from '../AssistanceDetailPage/AssistanceDetailPage';
import {GalleryDetailPage} from '../GalleryDetailPage/GalleryDetailPage';
import {FeedbacksDetailPage} from '../FeedbacksDetailPage/FeedbacksDetailPage';
import {ROUTES} from '../../App/routes';

const DetailPage = () => {
    return (
        <>
            <NavigationMenu />
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
            {/*<Route exact path="*">*/}
            {/*   !!!404!!!*/}
            {/*</Route>*/}
            <Footer/>
        </>
    );
};

export {DetailPage};
