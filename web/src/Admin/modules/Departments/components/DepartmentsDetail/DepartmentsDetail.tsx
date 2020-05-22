import React, {useEffect, useState, useCallback} from 'react';
import {useParams} from "react-router-dom";
import {DepartmentsDetailHeader} from './DepartmentsDetailHeader';
import {DepartmentsDetailContent} from './DepartmentsDetailContent';
import {getDepartmentDetail as getDepartmentDetailAPI} from '../../api';
import {PendingCloak} from '../../../../baseComponents/PendingCloak/PendingCloak';

type DepartmentsDetailDataType = {
    name: string
}

const DepartmentsDetail = () => {
    const { id } = useParams();

    const [departmentData, setDepartmentData] = useState<DepartmentsDetailDataType>();
    const [pending, setPending] = useState(false);

    const getDepartmentDetail = useCallback(() => {
        setPending(true);
        getDepartmentDetailAPI(id)
            .then(({ data }) => {
                setDepartmentData(data);
                setPending(false);
            })
            .catch(error => console.log(error))
    }, [id]);

    useEffect(() => {
        getDepartmentDetail()
    }, [getDepartmentDetail]);

    return (
        <>
            {
                pending && (
                    <PendingCloak/>
                )
            }
            {
                !pending && departmentData && (
                   <>
                       <DepartmentsDetailHeader
                           departmentData={departmentData}
                       />
                       <DepartmentsDetailContent
                           departmentId={id}
                           departmentData={departmentData}
                           getDepartmentDetail={getDepartmentDetail}
                       />
                   </>
                )
            }
        </>
    );
};

export {DepartmentsDetail};
