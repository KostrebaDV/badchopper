import React, { useState } from 'react';

import { MODALS, MediaModalsContext } from './const';
import {MediaAddImageModal} from '../MediaAddImageModal/MediaAddImageModal';
import {NotificationModal} from '../../../../baseComponents/NotificationModal/NotificationModal';

export const MediaModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isAddMediaModalOpen, setIsAddMediaModalOpen] = useState(false);
	const [isDeleteMediaModalOpen, setIsDeleteMediaModalOpen] = useState(false);

	const modalState = {
		[MODALS.ADD_MEDIA_MODAL]: setIsAddMediaModalOpen,
		[MODALS.DELETE_MEDIA_MODAL]: setIsDeleteMediaModalOpen,
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
			<MediaModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</MediaModalsContext.Provider>
            <MediaAddImageModal
                modalData={modalData}
                isOpen={isAddMediaModalOpen}
                handleClose={() => closeModal(MODALS.ADD_MEDIA_MODAL)}
            />
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteMediaModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_MEDIA_MODAL)}
            />
		</>
	);
};
