import React from 'react';
import {
    Route
} from "react-router-dom";

import {StaffBarbers} from './components/StaffBarbers/StaffBarbers';
import {StaffManagers} from './components/StaffManagers/StaffManagers';
import {ROUTES} from '../../adminComponents/Content/routes';
import {StaffModalsProvider} from './components/StaffModalsProvider/StaffModalsProvider';
import {StaffContextProvider} from './store/StaffContext';

const Staff = () => {
    return (
        <StaffContextProvider>
            <StaffModalsProvider>
                <Route path={ROUTES.STAFF_BARBERS}>
                    <StaffBarbers/>
                </Route>
                <Route path={ROUTES.STAFF_MANAGERS}>
                    <StaffManagers/>
                </Route>
            </StaffModalsProvider>
        </StaffContextProvider>
    );
};

export {Staff};
