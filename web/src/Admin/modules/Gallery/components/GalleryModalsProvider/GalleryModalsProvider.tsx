import React, { useState } from 'react';

import { MODALS, GalleryModalsContext } from './const';
import {NotificationModal} from '../../../../baseComponents/NotificationModal/NotificationModal';
import {AddGalleryModal} from '../AddGalleryModal/AddGalleryModal';
import {EditGalleryModal} from '../EditGalleryModal/EditGalleryModal';

export const GalleryModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isAddAssistanceModalOpen, setIsAddAssistanceModalOpen] = useState(false);
	const [isEditAssistanceModalOpen, setIsEditAssistanceModalOpen] = useState(false);
	const [isDeleteAssistanceModalOpen, setIsDeleteAssistanceModalOpen] = useState(false);

	const modalState = {
		[MODALS.ADD_GALLERY_MODAL]: setIsAddAssistanceModalOpen,
		[MODALS.DELETE_GALLERY_MODAL]: setIsDeleteAssistanceModalOpen,
		[MODALS.GALLERY_EDIT_MODAL]: setIsEditAssistanceModalOpen
	};

	const openModal = (modalName, data) => {
		modalState[modalName](true);

		if (data) setModalData(data);
	};

	const closeModal = (modalName) => {
		modalState[modalName](false);

		if (modalData) setModalData({});
	};

	const modalProviderActions = {
		openModal,
		closeModal
	};

	return (
		<>
			<GalleryModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</GalleryModalsContext.Provider>
            <AddGalleryModal
                modalData={modalData}
                isOpen={isAddAssistanceModalOpen}
                handleClose={() => closeModal(MODALS.ADD_GALLERY_MODAL)}
            />
            <EditGalleryModal
                modalData={modalData}
                isOpen={isEditAssistanceModalOpen}
                handleClose={() => closeModal(MODALS.GALLERY_EDIT_MODAL)}
            />
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteAssistanceModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_GALLERY_MODAL)}
            />
		</>
	);
};
