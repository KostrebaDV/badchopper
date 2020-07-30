import React, {useMemo} from 'react';
import {CheckboxGroup} from '../../../../baseComponents/Form/Adapters';
import {Field} from '../../../../baseComponents/Form';
import {DepartmentAddFormStaffItem} from './DepartmentAddFormStaffItem';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {Link} from '../../../../baseComponents/Link/Link';
import {ROUTES} from '../../../../adminComponents/Content/routes';

const DepartmentAddFormStaff = (
    {
        editMode,
        staffData
    }
) => {
    const stuffItems = useMemo(() => {
        if (staffData.length === 0) {
            return []
        }

        return staffData.reduce((acc, item) => {
            acc.push({
                id: item._id,
                content: <DepartmentAddFormStaffItem
                    item={item}
                />
            })

            return acc;
        }, [])
    }, [staffData])

    const hasStaffData = staffData.length !== 0;

    return (
        <>
            {
                hasStaffData && (
                    <Field
                        previewMode={!editMode}
                        component={CheckboxGroup}
                        name="staff"
                        label="Выберите сотрудников"
                        items={stuffItems}
                    />
                )
            }
            {
                !hasStaffData && (
                    <EmptyContent>
                        <div>
                            <p>Нет добавленного персонала</p>
                            <p>!Добавьте&nbsp;
                                <Link underline link={ROUTES.STAFF_BARBERS}>мастеров</Link>
                                &nbsp;!или&nbsp;
                                <Link underline link={ROUTES.STAFF_BARBERS}>менеджеров</Link>
                            </p>
                        </div>
                    </EmptyContent>
                )
            }
        </>
    );
};

DepartmentAddFormStaff.defaultProps = {
    editMode: true
}

export {DepartmentAddFormStaff};
