import React from 'react';
import Form from '../../../../baseComponents/Form';
import {FORMS} from '../../const';
import {StaffModalFormLayout} from './StaffModalFormLayout';

const AddStaffModalForm = (
    {
        handleAddStaff,
        mediaModalData,
        positionDropDownValue
    }
) => {
    return (
        <Form
            onSubmit={handleAddStaff}
            name={FORMS.ADD_STAFF_FORM}
        >
            <StaffModalFormLayout
                mediaModalData={mediaModalData}
                positionDropDownValue={positionDropDownValue}
            />
        </Form>
    );
};

export {AddStaffModalForm};
