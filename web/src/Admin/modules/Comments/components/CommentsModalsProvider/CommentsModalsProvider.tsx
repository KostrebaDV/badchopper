import React, { useState } from 'react';

import { MODALS, CommentsModalsContext } from './const';
import {NotificationModal} from '../../../../baseComponents/NotificationModal/NotificationModal';
import {CommentModal} from "../CommentModal/CommentModal";

export const CommentsModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
	const [isDeleteCommentModalOpen, setIsDeleteCommentModalOpen] = useState(false);

	const modalState = {
		[MODALS.COMMENT_MODAL]: setIsCommentModalOpen,
		[MODALS.DELETE_COMMENT_MODAL]: setIsDeleteCommentModalOpen
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
			<CommentsModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</CommentsModalsContext.Provider>
            <CommentModal
                modalData={modalData}
                isOpen={isCommentModalOpen}
                handleClose={() => closeModal(MODALS.COMMENT_MODAL)}
            />
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteCommentModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_COMMENT_MODAL)}
            />
		</>
	);
};
