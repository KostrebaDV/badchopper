import React from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

const ButtonGroupIconButtons = (
	{
		children,
		alignCenter,
        className
	}
) => {
	const componentClassName = ClassNames(
		classes.buttonGroupIconButtons,
		{
			[classes.buttonGroupIconButtons_center]: alignCenter
		},
        className
	);

	return (
		<div className={componentClassName}>{children}</div>
	);
};

ButtonGroupIconButtons.defaultProps = {
	alignCenter: false,
    className: ''
};

ButtonGroupIconButtons.propTypes = {
	children: PropTypes.array,
	alignCenter: PropTypes.bool,
    className: PropTypes.string
};

export { ButtonGroupIconButtons };
