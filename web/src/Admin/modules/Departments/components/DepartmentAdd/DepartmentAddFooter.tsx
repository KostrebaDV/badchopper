import React, {useContext} from 'react';
import {ContentFooter} from '../../../../adminComponents/ContentFooter/ContentFooter';
import {Button} from '../../../../baseComponents/Button/Button';
import {FormContext} from '../../../../../store/FormContext';

const DepartmentAddFooter = (
    {
        isDepartmentDetail
    }
) => {
    const { forms } = useContext(FormContext);

    return (
        <ContentFooter>
            {
                !isDepartmentDetail && (
                    <Button
                        actionHandler={() => forms.ADD_DEPARTMENT_FORM.submitForm()}
                        label='!!Добавить филиал'
                        type="primary"
                    />
                )
            }
            {
                isDepartmentDetail && (
                    <Button
                        actionHandler={() => forms.EDIT_DEPARTMENT_FORM.submitForm()}
                        label='!!Редактировать'
                        type="primary"
                    />
                )
            }
        </ContentFooter>
    );
};

DepartmentAddFooter.defaultProps = {
    isDepartmentDetail: false
};

export {DepartmentAddFooter};
