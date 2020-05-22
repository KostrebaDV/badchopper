import React from 'react';
import {FORMS} from '../../const';
import Form from '../../../../baseComponents/Form';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {DepartmentAddFormGeneral} from './DepartmentAddFormGeneral';
import {DepartmentAddFormMedia} from './DepartmentAddFormMedia';

const DepartmentEditForm = (
    {
        selectedMediaId,
        handleSelectMedia,
        handleEditDepartment,
        handleDeleteProcessedImage,
        hasSelectedMedia,
        initialValues,
        editMode,
        isDepartmentDetail
    }
) => {
    return (
        <Form
            initialValues={initialValues}
            onSubmit={handleEditDepartment}
            name={FORMS.EDIT_DEPARTMENT_FORM}
        >
            <GridLayout>
                <GridLayoutRow grid="6-6">
                    <DepartmentAddFormGeneral
                        editMode={editMode}
                    />
                    <DepartmentAddFormMedia
                        showDeleteButton={isDepartmentDetail && editMode}
                        hasSelectedMedia={hasSelectedMedia}
                        selectedMediaId={selectedMediaId}
                        handleDeleteProcessedImage={handleDeleteProcessedImage}
                        handleSelectMedia={handleSelectMedia}
                    />
                </GridLayoutRow>
            </GridLayout>
        </Form>
    );
};

export {DepartmentEditForm};
