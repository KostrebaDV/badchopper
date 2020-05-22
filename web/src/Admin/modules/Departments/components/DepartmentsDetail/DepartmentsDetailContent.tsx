import React, {useContext, useMemo, useState} from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentAddContent} from '../DepartmentAdd/DepartmentAddContent';
import getDepartmentInitialValues from '../../utils/getDepartmentInitialValues';
import {isUndefined} from '../../../../../utils';
import classes from './styles/index.module.scss';
import {Button} from '../../../../baseComponents/Button/Button';
import pencilIcon from '@iconify/icons-mdi/pencil';
import closeIcon from '@iconify/icons-mdi/close';
import deleteOutline from '@iconify/icons-mdi/delete-outline';
import {DepartmentAddFooter} from '../DepartmentAdd/DepartmentAddFooter';
import {getNavigationList} from '../../../../adminComponents/Navigation/api';
import {NavigationContext} from '../../../../adminComponents/Navigation/store';
import {ButtonGroupIconButtons} from '../../../../baseComponents/ButtonGroup/ButtonGroupIconButtons';
import {MODALS} from '../DepartmentsModalsProvider/const';
import {DepartmentsModalsContext} from '../DepartmentsModalsProvider/const';
import {deleteDepartment as deleteDepartmentAPI} from '../../api';
import { useHistory } from "react-router-dom";
import {ROUTES} from '../../../../adminComponents/Content/routes';

const DepartmentsDetailContent = (
    {
        departmentData,
        departmentId,
        getDepartmentDetail
    }
) => {
    const {setNavigationList} = useContext(NavigationContext);
    const [editMode, setEditMode] = useState(false);
    const {openModal} = useContext(DepartmentsModalsContext);
    const history = useHistory();

    const initialValues = useMemo(() => {
        if (isUndefined(departmentData)) return;

        return getDepartmentInitialValues(departmentData);
    }, [departmentData]);

    const onEditDepartmentSuccess = () => {
        setEditMode(false);
        getDepartmentDetail();
        getNavigationList()
            .then(({ data }) => {
                setNavigationList(data);
            });
    };

    const onDeleteDepartmentSuccess = () => {
        getNavigationList()
            .then(({ data }) => {
                setNavigationList(data);
                history.push(ROUTES.DEPARTMENTS_LIST);
            });
    };

    const deleteDepartment = () => {
        return deleteDepartmentAPI({id: departmentId})
            .then(() => onDeleteDepartmentSuccess())
    };

    const handleDeleteModalOpen = () => {
        if ( typeof openModal === 'undefined') return;

        openModal(
            MODALS.DELETE_DEPARTMENT_MODAL,
            {
                modalTitle: '!!Удалить филиал',
                rightButtonLabel: '!!Удалить',
                handleSubmit: deleteDepartment,
                content: '!!Вы уверены, что хотите удалить филиал?'
            }
        );
    };

    const editButton = editMode ? closeIcon : pencilIcon;

    return (
        <ContentLayout
            className={classes.departmentsDetailContent}
        >
            <ButtonGroupIconButtons className={classes.departmentsDetailContent__editButtonWrapper}>
                {
                    !editMode && (
                        <Button
                            icon={deleteOutline}
                            transparent
                            type="danger"
                            className={classes.departmentsDetailContent__deleteButton}
                            actionHandler={handleDeleteModalOpen}
                        />
                    )
                }
                <Button
                    icon={editButton}
                    transparent
                    type="info"
                    actionHandler={() => setEditMode(!editMode)}
                />
            </ButtonGroupIconButtons>
            <DepartmentAddContent
                isDepartmentDetail
                editMode={editMode}
                departmentId={departmentId}
                initialValues={initialValues}
                onEditDepartmentSuccess={onEditDepartmentSuccess}
            />
            {
                editMode && (
                    <DepartmentAddFooter
                        isDepartmentDetail
                    />
                )
            }
        </ContentLayout>
    );
};

export {DepartmentsDetailContent};
