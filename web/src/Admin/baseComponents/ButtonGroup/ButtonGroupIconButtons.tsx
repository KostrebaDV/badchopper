import React from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

const ButtonGroupIconButtons = (
	{
		children,
		alignCenter
	}
) => {
	const componentClassName = ClassNames(
		classes.buttonGroupIconButtons,
		{
			[classes.buttonGroupIconButtons_center]: alignCenter
		}
	);

	return (
		<div className={componentClassName}>{children}</div>
	);
};

ButtonGroupIconButtons.defaultProps = {
	alignCenter: false
};

ButtonGroupIconButtons.propTypes = {
	children: PropTypes.array,
	alignCenter: PropTypes.bool
};

export { ButtonGroupIconButtons };
