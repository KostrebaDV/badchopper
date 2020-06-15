import React, {useContext, useEffect} from 'react';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {AssistanceContext} from '../../store';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {getAllAssistance, deleteAssistance} from '../../api';
import {AssistanceListItem} from './AssistanceListItem';
import {getUniqueId, getUniqueKey} from '../../../../../utils';
import {AssistanceModalsContext, MODALS} from '../AssistanceModalsProvider/const';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import classes from './styles/index.module.scss';

const AssistanceList = () => {
    const {assistance, setAssistance, removeOneAssistance} = useContext(AssistanceContext);
    const {openModal} = useContext(AssistanceModalsContext);
    const {showNotification} = useContext(AdminAppContext);

    useEffect(() => {
        getAllAssistance()
            .then(({data}) => setAssistance(data))
        // eslint-disable-next-line
    }, []);

    const handleItemDelete = (id, itemName) => {
        return deleteAssistance(id)
            .then(() => {
                removeOneAssistance(id);

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `!! Услуга "${itemName}" удалена`
                    })
                }
            })
    };

    const handleItemClick = (id) => {
        const selectedItem = assistance.find(item => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.ASSISTANCE_DETAIL_MODAL,
                selectedItem
            );
        }
    };

    const handleOpenItemDeleteModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = assistance.find((item) => id === item._id);

        if (!!openModal && typeof selectedItem !== 'undefined') {
            openModal(
                MODALS.DELETE_ASSISTANCE_MODAL,
                {
                    modalTitle: '!!Удалить услугу',
                    rightButtonLabel: '!!Удалить',
                    handleSubmit: () => handleItemDelete(id, selectedItem.name),
                    content: `!!Вы уверены, что хотите удалить услугу "${selectedItem.name}"?`
                }
            );
        }
    };

    const handleOpenItemEditModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = assistance.find((item) => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.ASSISTANCE_EDIT_MODAL,
                selectedItem
            );
        }
    };

    const hasAssistance = assistance.length !== 0;
    return (
        <ContentLayout>
            <GridLayout>
                {
                    hasAssistance && (
                        <GridLayoutRow
                            alignItems="center"
                            gridColumn={24}
                            grid="8-9-7"
                            className={classes.assistanceList__header}
                        >
                            <div>!!название</div>
                            <div>!!описание</div>
                            <div>!!цена</div>
                        </GridLayoutRow>
                    )
                }
                {
                    hasAssistance && assistance.map(item => {
                        return (
                            <AssistanceListItem
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
                    !hasAssistance && (
                        <EmptyContent>
                            !!Добавьте услуги
                        </EmptyContent>
                    )
                }
            </GridLayout>
        </ContentLayout>
    );
};

export {AssistanceList};
