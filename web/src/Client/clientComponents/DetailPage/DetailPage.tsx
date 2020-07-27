import React, {useMemo} from 'react';
import {Route, useLocation} from "react-router-dom";
import {NavigationMenu} from '../NavigationMenu/NavigationMenu';
import {Footer} from '../Footer/Footer';
import {DepartmentDetailPage} from '../DepartmentDetailPage/DepartmentDetailPage';
import {AssistanceDetailPage} from '../AssistanceDetailPage/AssistanceDetailPage';
import {GalleryDetailPage} from '../GalleryDetailPage/GalleryDetailPage';
import {FeedbacksDetailPage} from '../FeedbacksDetailPage/FeedbacksDetailPage';
import {ContactDetailPage} from '../ContactDetailPage/ContactDetailPage';
import {ROUTES} from '../../App/routes';

const DetailPage = () => {
    let {pathname} = useLocation();

    const isContactPage = useMemo(() => {
        return pathname === ROUTES.CONTACT_DETAIL;
    }, [pathname]);

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
            <Route path={ROUTES.CONTACT_DETAIL}>
                <ContactDetailPage/>
            </Route>
            {/*<Route exact path="*">*/}
            {/*   !!!404!!!*/}
            {/*</Route>*/}
            {
                !isContactPage && (
                    <Footer/>
                )
            }
        </>
    );
};

export {DetailPage};
