import React, {useEffect, useState, useContext} from 'react';
import {DepartmentsListHeader} from './DepartmentsListHeader';
import {DepartmentsListContent} from './DepartmentsListContent';
import {getAllDepartments} from '../../api';
import {DepartmentsContext} from '../../store';

type PendingType = boolean;

const DepartmentsList = () => {
    const {departmentsList, setAllDepartments} = useContext(DepartmentsContext);

    const [pending, setPending] = useState<PendingType>(false);

    useEffect(() => {
        setPending(true);
        getAllDepartments()
            .then(({ data }) => {
                setAllDepartments(data);
                setPending(false);
            })
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <DepartmentsListHeader/>
            <DepartmentsListContent
                pending={pending}
                departmentsList={departmentsList}
            />
        </>
    );
};

export {DepartmentsList};
