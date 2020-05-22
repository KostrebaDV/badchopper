import React from 'react';
import PropTypes from 'prop-types';

import { ModalContent, ModalFooter, ModalHeader } from '../Modal';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

import classes from './styles/index.module.scss';

const NotificationModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const {
		content,
		modalTitle,
		handleSubmit: handleSubmitFromModalData,
		rightButtonLabel
	} = modalData;

	const handleSubmit = () => {
		return handleSubmitFromModalData()
			.then(() => handleClose());
	};

	const leftButtons = (
		<Button
			actionHandler={handleClose}
			label="!!Закрыть"
			type="secondary"
		/>
	);

	const rightButtons = (
		<Button
			actionHandler={handleSubmit}
			label={rightButtonLabel}
			type="danger"
		/>
	);

	return (
		<>
			<ModalHeader
				label={modalTitle}
				handleClose={handleClose}
			/>
			<ModalContent
				autoHeight
				className={classes.notificationModalContent}
			>
				{content}
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={leftButtons}
					rightButtons={rightButtons}
				/>
			</ModalFooter>
		</>
	);
};

NotificationModalContent.propTypes = {
	modalData: PropTypes.object,
	handleClose: PropTypes.func,
	handleSubmit: PropTypes.func
};

export default NotificationModalContent;
