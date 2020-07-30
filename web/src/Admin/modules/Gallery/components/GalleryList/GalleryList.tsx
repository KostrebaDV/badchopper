import React, {useContext, useEffect} from 'react';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {GalleryContext} from '../../store';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {deleteGallery, getAllGalleries} from '../../api';
import {GalleryListItem} from './GalleryListItem';
import {getUniqueId, getUniqueKey} from '../../../../../utils';
import {GalleryModalsContext, MODALS} from '../GalleryModalsProvider/const';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import classes from './styles/index.module.scss';

const GalleryList = () => {
    const {galleries, setAllGalleries, removeOneGallery} = useContext(GalleryContext);
    const {openModal} = useContext(GalleryModalsContext);
    const {showNotification} = useContext(AdminAppContext);

    useEffect(() => {
        getAllGalleries()
            .then(({data}) => setAllGalleries(data));
        // eslint-disable-next-line
    }, []);

    const handleItemDelete = (id, itemName) => {
        return deleteGallery(id)
            .then(() => {
                removeOneGallery(id);

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `Галлерея "${itemName}" удалена`
                    });
                }
            });
    };

    const handleItemClick = (id) => {
        const selectedItem = galleries.find(item => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.ADD_GALLERY_MODAL,
                {
                    initialValues: selectedItem
                }
            );
        }
    };

    const handleOpenItemDeleteModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = galleries.find((item) => id === item._id);

        if (!!openModal && typeof selectedItem !== 'undefined') {
            openModal(
                MODALS.DELETE_GALLERY_MODAL,
                {
                    modalTitle: 'Удалить галлерею',
                    rightButtonLabel: 'Удалить',
                    handleSubmit: () => handleItemDelete(id, selectedItem.name),
                    content: `Вы уверены, что хотите удалить галлерею "${selectedItem.name}"?`
                }
            );
        }
    };

    const handleOpenItemEditModal = (e, id) => {
        e.stopPropagation();

        const selectedItem = galleries.find((item) => id === item._id);

        if (!!openModal) {
            openModal(
                MODALS.GALLERY_EDIT_MODAL,
                {
                    initialValues: selectedItem
                }
            );
        }
    };

    const hasAssistance = galleries.length !== 0;

    return (
        <ContentLayout>
            <GridLayout>
                {
                    hasAssistance && (
                        <GridLayoutRow
                            alignItems="center"
                            grid="3-3-3-_2-1"
                            className={classes.galleryList__header}
                        >
                            <div>название</div>
                            <div>системное название</div>
                            <div>кол-во фото</div>
                        </GridLayoutRow>
                    )
                }
                {
                    hasAssistance && galleries.map(item => {
                        return (
                            <GalleryListItem
                                key={getUniqueKey()}
                                item={item}
                                handleItemClick={handleItemClick}
                                handleOpenItemDeleteModal={handleOpenItemDeleteModal}
                                handleOpenItemEditModal={handleOpenItemEditModal}
                            />
                        );
                    })
                }
                {
                    !hasAssistance && (
                        <EmptyContent>
                            Добавьте галлерею
                        </EmptyContent>
                    )
                }
            </GridLayout>
        </ContentLayout>
    );
};

export {GalleryList};
