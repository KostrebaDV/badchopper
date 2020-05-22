import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../baseComponents/Modal';
import NotificationModalContent from './NotificationModalContent';

const NotificationModal = (
	{
		isOpen,
		modalData,
		handleClose
	}
) => {
	return (
		<Modal
			size="small"
			isOpen={isOpen}
			handleClose={handleClose}
			render={renderData => {
				return (
					<NotificationModalContent
						{...renderData}
						modalData={modalData}
						handleClose={handleClose}
					/>
				);
			}}
		/>
	);
};


NotificationModal.propTypes = {
	isOpen: PropTypes.bool,
	modalData: PropTypes.object,
	handleClose: PropTypes.func
};

export { NotificationModal };
