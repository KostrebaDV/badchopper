import React from 'react';
import PropTypes from 'prop-types';

import classes from '../styles/index.module.scss';
import ClassNames from 'classnames';

const ModalContentInfoSection = (
	{
		children,
		className
	}
) => {
	const componentClassName = ClassNames(
		classes.modalContentInfoSection,
		className
	);

	return (
		<div className={componentClassName}>
			{ children }
		</div>
	);
};

ModalContentInfoSection.propTypes = {
	className: PropTypes.string
};

export { ModalContentInfoSection };
