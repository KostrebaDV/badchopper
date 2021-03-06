import React from 'react';
import Form from '../../../../baseComponents/Form';
import {FORMS} from '../../const';
import {StaffModalFormLayout} from './StaffModalFormLayout';

const EditStaffModalForm = (
    {
        handleEditStaff,
        mediaModalData,
        positionDropDownValue,
        initialValues,
        isPreviewMode
    }
) => {
    return (
        <Form
            initialValues={initialValues}
            onSubmit={handleEditStaff}
            name={FORMS.EDIT_STAFF_FORM}
        >
            <StaffModalFormLayout
                isPreviewMode={isPreviewMode}
                mediaModalData={mediaModalData}
                positionDropDownValue={positionDropDownValue}
                mediaId={[initialValues.image._id]}
            />
        </Form>
    );
};

export {EditStaffModalForm};
