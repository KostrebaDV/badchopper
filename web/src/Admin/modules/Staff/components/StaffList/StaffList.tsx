import React, {useContext, useEffect} from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {StaffContext} from '../../store';
import {deleteStaff, getAllBarberStaff, getAllMangerStaff} from '../../api';
import {StaffListItem} from './StaffListItem';
import {getUniqueId, getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';
import {MODALS} from '../StaffModalsProvider/const';
import {StaffModalsContext} from '../StaffModalsProvider/const';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';

const StaffList = (
    {
        isBarberLayout
    }
) => {
    const {staffList, setAllStaff, removeStaff} = useContext(StaffContext);
    const {openModal} = useContext(StaffModalsContext);
    const {showNotification} = useContext(AdminAppContext);

    useEffect(() => {
        if (isBarberLayout) {
            getAllBarberStaff()
                .then(({data}) => setAllStaff(data))
        } else {
            getAllMangerStaff()
                .then(({data}) => setAllStaff(data))
        }
    // eslint-disable-next-line
    }, []);

    const handleItemClick = (id) => {
        const selectedItem = staffList.find((item) => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.STAFF_MODAL,
                {
                    isBarberLayout,
                    isEditMode: false,
                    iPreviewMode: true,
                    selectedItem
                }
            );
        }
    };

    const handleItemDelete = (id, itemName) => {
        return deleteStaff({id})
            .then(() => {
                removeStaff(id);

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `!!Сотрудник "${itemName}" удален`
                    })
                }
            })
    };

    const handleOpenItemDeleteModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = staffList.find((item) => id === item._id);

        if (!!openModal && typeof selectedItem !== 'undefined') {
            openModal(
                MODALS.DELETE_STAFF_MODAL,
                {
                    modalTitle: '!!Удалить сотрудника',
                    rightButtonLabel: '!!Удалить',
                    handleSubmit: () => handleItemDelete(id, selectedItem.name),
                    content: `!!Вы уверены, что хотите удалить "${selectedItem.name}"?`
                }
            );
        }
    };

    const handleOpenItemEditModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = staffList.find(item => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.STAFF_MODAL,
                {
                    isBarberLayout,
                    isEditMode: true,
                    selectedItem,
                    iPreviewMode: false,
                }
            );
        }
    };

    const hasStaff = staffList.length !== 0;
    const staffLabel = isBarberLayout ? '!!мастеров' : '!!менеджеров';

    return (
        <ContentLayout>
            <GridLayout>
                {
                    hasStaff && (
                        <GridLayoutRow
                            alignItems="center"
                            gridColumn={24}
                            grid="3-8-7-3-3"
                            className={classes.staffList}
                        >
                            <div></div>
                            <div>!!ФИО</div>
                            <div>!!описание</div>
                            <div>!!соц. сети</div>
                        </GridLayoutRow>
                    )
                }
                {
                    hasStaff && staffList.map(item => {
                        return (
                            <StaffListItem
                                key={getUniqueKey()}
                                item={item}
                                handleItemClick={handleItemClick}
                                handleOpenItemDeleteModal={handleOpenItemDeleteModal}
                                handleOpenItemEditModal={handleOpenItemEditModal}
                            />
                        )
                    })
                }
                {
                    !hasStaff && (
                        <EmptyContent>
                            !!Добавьте {staffLabel}
                        </EmptyContent>
                    )
                }
            </GridLayout>
        </ContentLayout>
    );
};

StaffList.defaultProps = {
    isBarberLayout: false
};

export {StaffList};
