import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';


import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

const TooltipActionListItem = (
	{
		name,
		icon,
		disabled,
		iconClass,
		targetElementId,
		action: handleClickFromProps,
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.tooltipActionListItem_disabled]: disabled
		},
		classes.tooltipActionListItem
	);

	const iconClassName = ClassNames(
		{
			[classes.tooltipActionListItem_iconDisabled]: disabled
		},
		classes.tooltipActionListItem_icon,
		iconClass
	);

	const handleClick = () => {
		if (!disabled) {
			handleClickFromProps(targetElementId);
		}
	};

	return (
		<div
			className={componentClassName}
			onClick={handleClick}
		>
			<Icon
				className={iconClassName}
				icon={icon}
			/>
			{ name }
		</div>
	);
};

TooltipActionListItem.defaultProps = {
	disabled: false
};

TooltipActionListItem.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string,
	action: PropTypes.func,
	disabled: PropTypes.bool,
	iconClass: PropTypes.string,
	targetElementId: PropTypes.number
};

export default TooltipActionListItem;
