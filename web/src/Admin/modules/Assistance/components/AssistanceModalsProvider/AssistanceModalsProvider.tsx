import React, { useState } from 'react';

import { MODALS, AssistanceModalsContext } from './const';
import {NotificationModal} from '../../../../baseComponents/NotificationModal/NotificationModal';
import {AddAssistanceModal} from '../AddAssistanceModal/AddAssistanceModal';
import {AssistanceDetailModal} from '../AssistanceDetailModal/AssistanceDetailModal';
import {EditAssistanceModal} from '../EditAssistanceModal/EditAssistanceModal';

export const AssistanceModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isAddAssistanceModalOpen, setIsAddAssistanceModalOpen] = useState(false);
	const [isDeleteAssistanceModalOpen, setIsDeleteAssistanceModalOpen] = useState(false);
	const [isDetailAssistanceModalOpen, setIsDetailAssistanceModalOpen] = useState(false);
	const [isEditAssistanceModalOpen, setIsEditAssistanceModalOpen] = useState(false);

	const modalState = {
		[MODALS.ADD_ASSISTANCE_MODAL]: setIsAddAssistanceModalOpen,
		[MODALS.DELETE_ASSISTANCE_MODAL]: setIsDeleteAssistanceModalOpen,
		[MODALS.ASSISTANCE_DETAIL_MODAL]: setIsDetailAssistanceModalOpen,
		[MODALS.ASSISTANCE_EDIT_MODAL]: setIsEditAssistanceModalOpen,
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
			<AssistanceModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</AssistanceModalsContext.Provider>
            <AddAssistanceModal
                modalData={modalData}
                isOpen={isAddAssistanceModalOpen}
                handleClose={() => closeModal(MODALS.ADD_ASSISTANCE_MODAL)}
            />
            <AssistanceDetailModal
                modalData={modalData}
                isOpen={isDetailAssistanceModalOpen}
                handleClose={() => closeModal(MODALS.ASSISTANCE_DETAIL_MODAL)}
            />
            <EditAssistanceModal
                modalData={modalData}
                isOpen={isEditAssistanceModalOpen}
                handleClose={() => closeModal(MODALS.ASSISTANCE_EDIT_MODAL)}
            />
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteAssistanceModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_ASSISTANCE_MODAL)}
            />
		</>
	);
};
