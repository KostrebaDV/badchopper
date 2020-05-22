import React, {useContext, useState, useRef, FC, useEffect} from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentAddForm} from './DepartmentAddForm';
import {addDepartmentHook, editDepartmentHook} from './api';
import {NavigationContext} from '../../../../adminComponents/Navigation/store';
import {getNavigationList} from '../../../../adminComponents/Navigation/api';
import {isNull, isNullOrUndefined} from '../../../../../utils';
import {DepartmentAddContentType} from '../../types';
import {DepartmentEditForm} from './DepartmentEditForm';

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
    const mediaIdRef = useRef(null);
    const [selectedMediaId, setSelectedMediaId] = useState(null);
    const [hasSelectedMedia, setHasSelectedMedia] = useState(true);

    useEffect(() => {
        if (!isNullOrUndefined(initialValues)) {
            handleSelectMedia([initialValues?.imageId])
        }
    }, [initialValues]);

    const onAddDepartmentSuccess = () => {
        getNavigationList()
            .then(({ data }) => {
                setNavigationList(data);
                handleDeleteProcessedImage();
            });
    };

    const handleSelectMedia = (id) => {
        mediaIdRef.current = id[0];
        setSelectedMediaId(id[0]);
        setHasSelectedMedia(true);
    };

    const handleDeleteProcessedImage = () => {
        mediaIdRef.current = null;
        setSelectedMediaId(null);
        setHasSelectedMedia(true);
    };

    const handleAddDepartment = (values, resetFormValues) => {
        if (isNull(mediaIdRef.current)) {
            setHasSelectedMedia(false);

            return;
        }

        addDepartmentHook({...values, imageId: mediaIdRef.current }, onAddDepartmentSuccess);
        resetFormValues();
    };

    const handleEditDepartment = (values) => {
        if (isNull(mediaIdRef.current)) {
            setHasSelectedMedia(false);

            return;
        }

        editDepartmentHook(
            {
                ...values,
                id: departmentId,
                imageId: mediaIdRef.current
            },
            onEditDepartmentSuccess
        );
    };

    return (
        <ContentLayout hasMargin={!isDepartmentDetail}>
            {
                !isDepartmentDetail && (
                    <DepartmentAddForm
                        selectedMediaId={selectedMediaId}
                        hasSelectedMedia={hasSelectedMedia}
                        handleSelectMedia={handleSelectMedia}
                        handleAddDepartment={handleAddDepartment}
                        handleDeleteProcessedImage={handleDeleteProcessedImage}
                    />
                )
            }
            {
                isDepartmentDetail && (
                    <DepartmentEditForm
                        editMode={editMode}
                        initialValues={initialValues}
                        selectedMediaId={selectedMediaId}
                        hasSelectedMedia={hasSelectedMedia}
                        handleSelectMedia={handleSelectMedia}
                        isDepartmentDetail={isDepartmentDetail}
                        handleEditDepartment={handleEditDepartment}
                        handleDeleteProcessedImage={handleDeleteProcessedImage}
                    />
                )
            }
        </ContentLayout>
    );
};

export {DepartmentAddContent};
