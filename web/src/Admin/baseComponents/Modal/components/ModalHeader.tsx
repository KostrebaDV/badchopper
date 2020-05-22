import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Icon } from "@iconify/react";
import closeIcon from '@iconify/icons-mdi/close';

import { HeaderText } from '../../HeaderText/HeaderText';
import classes from '../styles/index.module.scss';

const ModalHeader = (
	{
		label,
		handleClose
	}
	) => {
	const handleCloseModal = useCallback((e) => {
		const { code, keyCode } = e;

		if (code === 'Escape' || keyCode === 27) {
			handleClose();
		}
	}, [handleClose]);

	useEffect(() => {
		window.addEventListener('keyup', handleCloseModal);

		return () => {
			window.removeEventListener('keyup', handleCloseModal);
		};
	}, [handleCloseModal]);

    return (
        <div className={classes.modalHeader}>
            <HeaderText bold>
                { label }
            </HeaderText>
            <div
                className={classes.modalHeader_closeButton_wrapper}
                onClick={handleClose}
            >
                <Icon
                    icon={closeIcon}
                    className={classes.modalHeader_closeButton}
                />
            </div>
        </div>
    );
};

ModalHeader.propTypes = {
    label: PropTypes.string,
	handleClose: PropTypes.func.isRequired
};

export { ModalHeader };
