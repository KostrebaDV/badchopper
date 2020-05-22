import React from 'react';
import {DepartmentAddHeader} from './DepartmentAddHeader';
import {DepartmentAddContent} from './DepartmentAddContent';
import {DepartmentAddFooter} from './DepartmentAddFooter';
import {DepartmentsModalsProvider} from '../DepartmentsModalsProvider/DepartmentsModalsProvider';

const DepartmentAdd = () => {
    return (
        <>
            <DepartmentAddHeader/>
            <DepartmentsModalsProvider>
                <DepartmentAddContent/>
                <DepartmentAddFooter/>
            </DepartmentsModalsProvider>
        </>
    );
};

export {DepartmentAdd};
