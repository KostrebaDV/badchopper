import React from 'react';
import {Route} from "react-router-dom";

import {DepartmentsModalsProvider} from './components/DepartmentsModalsProvider/DepartmentsModalsProvider';
import {DepartmentsDetail} from './components/DepartmentsDetail/DepartmentsDetail';
import {DepartmentsList} from './components/DepartmentsList/DepartmentsList';
import {ROUTES} from '../../adminComponents/Content/routes';
import {DepartmentsContextProvider} from './store/DepartmentsContext';

const Departments = () => {
    return (
        <DepartmentsContextProvider>
            <DepartmentsModalsProvider>
                <Route path={ROUTES.DEPARTMENTS_LIST}>
                    <DepartmentsList/>
                </Route>
                <Route path={ROUTES.DEPARTMENTS_DETAIL}>
                    <DepartmentsDetail/>
                </Route>
            </DepartmentsModalsProvider>
        </DepartmentsContextProvider>
    );
};

export {Departments};
