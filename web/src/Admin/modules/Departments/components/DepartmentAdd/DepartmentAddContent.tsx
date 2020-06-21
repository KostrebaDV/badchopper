import React, {useContext, useState, FC, useEffect, useRef} from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentAddForm} from './DepartmentAddForm';
import {addDepartmentHook, editDepartmentHook} from './api';
import {NavigationContext} from '../../../../adminComponents/Navigation/store';
import {getNavigationList} from '../../../../adminComponents/Navigation/api';
import {DepartmentAddContentType} from '../../types';
import {DepartmentEditForm} from './DepartmentEditForm';
import {getAddDepartmentData} from '../../api';

const DepartmentAddContent: FC<DepartmentAddContentType> = (
    {
        editMode,
        departmentId,
        initialValues,
        isDepartmentDetail,
        onEditDepartmentSuccess
    }
) => {
    const {setNavigationList} = useContext(NavigationContext);
    const [addData, setAddData] = useState({
        mediaData: [],
        staff: [],
        assistance: []
    });
    const [pending, setPending] = useState(false)
    const isAddDataFetched = useRef(false);

    useEffect(() => {
        if (typeof getAddDepartmentData === 'undefined' || isAddDataFetched.current) return;

        setPending(true)

        getAddDepartmentData()
            .then(({data}) => {
                setAddData({
                    mediaData: data.media,
                    staff: data.staff,
                    assistance: data.assistance,
                })

                isAddDataFetched.current = true;
                setPending(false)
            })
    }, []);

    const onAddDepartmentSuccess = () => {
        getNavigationList()
            .then(({ data }) => {
                setNavigationList(data);
            });
    };


    const handleAddDepartment = (values, resetFormValues) => {
        addDepartmentHook(values, onAddDepartmentSuccess);
        resetFormValues();
    };

    const handleEditDepartment = (values) => {
        editDepartmentHook(
            {
                ...values,
                id: departmentId
            },
            onEditDepartmentSuccess
        );
    };

    return (
        <ContentLayout hasMargin={!isDepartmentDetail}>
            {
                !isDepartmentDetail && !pending && (
                    <DepartmentAddForm
                        staffData={addData.staff}
                        assistanceData={addData.assistance}
                        handleAddDepartment={handleAddDepartment}
                        mediaModalData={{mediaData: addData.mediaData, singleSelect: true, rightButtonLabel: '!Выбрать'}}
                    />
                )
            }
            {
                isDepartmentDetail && !pending && (
                    <DepartmentEditForm
                        editMode={editMode}
                        staffData={addData.staff}
                        assistanceData={addData.assistance}
                        initialValues={initialValues}
                        isDepartmentDetail={isDepartmentDetail}
                        handleEditDepartment={handleEditDepartment}
                        mediaModalData={{mediaData: addData.mediaData, singleSelect: true, rightButtonLabel: '!Выбрать'}}
                    />
                )
            }
        </ContentLayout>
    );
};

export {DepartmentAddContent};
