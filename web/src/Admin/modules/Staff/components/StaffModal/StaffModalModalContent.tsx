import React, {useContext, useState, useEffect} from 'react';
import {AdminAppFormContext} from '../../../../App/store/AdminAppFormContext/consts';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../../../utils';
import {Button} from '../../../../baseComponents/Button/Button';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {getAllImages} from '../../../Media/api';
import {addStaff, editStaff} from '../../api';
import {StaffContext} from '../../store';
import {AddStaffModalForm} from './AddStaffModalForm';
import {EditStaffModalForm} from './EditStaffModalForm';

const StaffModalModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {isBarberLayout, selectedItem, isEditMode, iPreviewMode} = modalData;
    const {forms} = useContext(AdminAppFormContext);
    const {setStaff, updateStaff} = useContext(StaffContext);
    const {showNotification} = useContext(AdminAppContext);
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        getAllImages()
            .then(({data}) => setMediaData(data))
        // eslint-disable-next-line
    }, []);

    const handleAddStaff = (values) => {
        addStaff(values)
            .then(({data}) => {
                setStaff(data);
                handleClose();

                const notificationMessage = isBarberLayout
                    ? `!!Мастера ${data.name} ${data.surname} добавлен`
                    : `!!Мастера ${data.name} ${data.surname} добавлен`;

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: notificationMessage
                    })
                }
            })
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
                        message: `!! Карточка обновлена`
                    })
                }
            })
    };

    const getModalLabel = () => {
        if (isEditMode || iPreviewMode) {
            return `${selectedItem.name} ${selectedItem.surname}`
        }

        return isBarberLayout ? "!!Добавить мастера" : "!!Добавить менеджера";
    };

    const submitHandler = () => {
        return isEditMode
            ? () => forms.EDIT_STAFF_FORM.submitForm()
            : () => forms.ADD_STAFF_FORM.submitForm()
    };

    const leftButtons = (
        <Button
            actionHandler={handleClose}
            label="!!Закрыть"
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
        modalTitle: "!!Медиа файлы",
        rightButtonLabel: "!!Выбрать",
        mediaData,
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
                    (isEditMode || iPreviewMode) && (
                        <EditStaffModalForm
                            handleEditStaff={handleEditStaff}
                            mediaModalData={mediaModalData}
                            positionDropDownValue={positionDropDownValue}
                            initialValues={selectedItem}
                            iPreviewMode={iPreviewMode}
                        />
                    )
                }
                {
                    !isEditMode && !iPreviewMode && (
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
                    showRightButtons={!iPreviewMode}
                />
            </ModalFooter>
        </>
    );
};

export {StaffModalModalContent};
