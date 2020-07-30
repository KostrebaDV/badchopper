import React, {useContext} from 'react';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../../../utils';
import {Button} from '../../../../baseComponents/Button/Button';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {addStaff, editStaff} from '../../api';
import {StaffContext} from '../../store';
import {AddStaffModalForm} from './AddStaffModalForm';
import {EditStaffModalForm} from './EditStaffModalForm';
import {FormContext} from '../../../../../store/FormContext';

const StaffModalModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {isBarberLayout, selectedItem, isEditMode, isPreviewMode} = modalData;
    const {forms} = useContext(FormContext);
    const {setStaff, updateStaff} = useContext(StaffContext);
    const {showNotification} = useContext(AdminAppContext);

    const handleAddStaff = (values) => {
        addStaff(values)
            .then(({data}) => {
                setStaff(data);
                handleClose();

                const notificationMessage = isBarberLayout
                    ? `Мастера ${data.name} ${data.surname} добавлен`
                    : `Мастера ${data.name} ${data.surname} добавлен`;

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: notificationMessage
                    });
                }
            });
    };

    const handleEditStaff = (values) => {
        const {image, ...rest} = values;

        editStaff({...rest, id: values._id})
            .then(({data}) => {
                updateStaff([data]);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `Карточка обновлена`
                    });
                }
            });
    };

    const getModalLabel = () => {
        if (isEditMode || isPreviewMode) {
            return `${selectedItem.name} ${selectedItem.surname}`;
        }

        return isBarberLayout ? "Добавить мастера" : "Добавить менеджера";
    };

    const submitHandler = () => {
        return isEditMode
            ? () => forms.EDIT_STAFF_FORM.submitForm()
            : () => forms.ADD_STAFF_FORM.submitForm();
    };

    const leftButtons = (
        <Button
            actionHandler={handleClose}
            label="Закрыть"
            transparent
        />
    );

    const rightButtons = (
        <Button
            actionHandler={submitHandler()}
            label={isEditMode ? "Обновить" : "Добавить"}
            type="primary"
        />
    );

    const positionDropDownValue = isBarberLayout ? 1 : 2;

    const mediaModalData = {
        modalTitle: "Медиа файлы",
        rightButtonLabel: "Выбрать",
        singleSelect: true
    };

    return (
        <>
            <ModalHeader
                label={getModalLabel()}
                handleClose={handleClose}
            />
            <ModalContent>
                {
                    (isEditMode || isPreviewMode) && (
                        <EditStaffModalForm
                            handleEditStaff={handleEditStaff}
                            mediaModalData={mediaModalData}
                            positionDropDownValue={positionDropDownValue}
                            initialValues={selectedItem}
                            isPreviewMode={isPreviewMode}
                        />
                    )
                }
                {
                    !isEditMode && !isPreviewMode && (
                        <AddStaffModalForm
                            handleAddStaff={handleAddStaff}
                            mediaModalData={mediaModalData}
                            positionDropDownValue={positionDropDownValue}
                        />
                    )
                }
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    leftButtons={leftButtons}
                    rightButtons={rightButtons}
                    showRightButtons={!isPreviewMode}
                />
            </ModalFooter>
        </>
    );
};

export {StaffModalModalContent};
