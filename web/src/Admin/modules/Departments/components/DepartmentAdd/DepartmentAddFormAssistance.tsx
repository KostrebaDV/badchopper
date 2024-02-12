import React, {useMemo} from 'react';
import {Field} from '../../../../baseComponents/Form';
import {CheckboxGroup} from '../../../../baseComponents/Form/Adapters';
import {DepartmentAddFormAssistanceItem} from './DepartmentAddFormAssistanceItem';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {Link} from '../../../../baseComponents/Link/Link';
import {ROUTES} from '../../../../adminComponents/Content/routes';

const DepartmentAddFormAssistance = (
    {
        assistanceData,
        editMode,
    }
) => {
    const stuffItems = useMemo(() => {
        if (assistanceData.length === 0 ) {
            return [];
        }

        return assistanceData.reduce((acc, item) => {
            acc.push({
                id: item._id,
                content: <DepartmentAddFormAssistanceItem
                    item={item}
                />
            });

            return acc;
        }, []);
    }, [assistanceData]);

    const hasAssistanceData = assistanceData.length !== 0;

    return (
        <>
            {
                hasAssistanceData && (
                    <Field
                        previewMode={!editMode}
                        component={CheckboxGroup}
                        name="assistance"
                        label="Выберите сотрудников"
                        items={stuffItems}
                    />
                )
            }
            {
                !hasAssistanceData && (
                    <EmptyContent>
                        <div>
                            <p>Нет добавленых услуг</p>
                            <p>!Добавьте <Link underline link={ROUTES.ASSISTANCE}>услуг</Link></p>
                        </div>
                    </EmptyContent>
                )
            }
        </>
    );
};

DepartmentAddFormAssistance.defaultProps = {
    editMode: true
};

export {DepartmentAddFormAssistance};
