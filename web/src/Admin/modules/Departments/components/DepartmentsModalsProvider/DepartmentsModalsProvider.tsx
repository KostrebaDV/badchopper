import React, { useState } from 'react';

import { MODALS, DepartmentsModalsContext } from './const';
import {MediaSelectModal} from '../../../../baseComponents/MediaSelector/MediaSelectModal';
import {NotificationModal} from '../../../../baseComponents/NotificationModal/NotificationModal';

export const DepartmentsModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isMediaSelectModalOpen, setIsMediaSelectModalOpen] = useState(false);
	const [isDeleteDepartmentModalOpen, setIsDeleteDepartmentModalOpen] = useState(false);

	const modalState = {
		[MODALS.MEDIA_SELECT_MODAL]: setIsMediaSelectModalOpen,
		[MODALS.DELETE_DEPARTMENT_MODAL]: setIsDeleteDepartmentModalOpen,
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
			<DepartmentsModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</DepartmentsModalsContext.Provider>
            <MediaSelectModal
                modalData={modalData}
                isOpen={isMediaSelectModalOpen}
                handleClose={() => closeModal(MODALS.MEDIA_SELECT_MODAL)}
            />
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteDepartmentModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_DEPARTMENT_MODAL)}
            />
		</>
	);
};
