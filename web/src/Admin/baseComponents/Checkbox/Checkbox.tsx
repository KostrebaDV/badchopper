import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";
import check from "@iconify/icons-mdi/check";

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';
import { isNull } from '../../../utils';

const Checkbox = (
	{
		value,
		className,
		onFieldChange,
		iconClassName: iconClassNameFromProps,
		iconCheckClassName: iconCheckClassNameFromProps,
	}
) => {
	const [checkboxValue, setCheckboxValue] = useState(false);

	useEffect(() => {
		if (isNull(value)) {
			onFieldChange(false);
		}

		if (value) {
			onFieldChange(value);
			setCheckboxValue(value);
		}
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const ToggleCheckbox = () => {
		setCheckboxValue(!checkboxValue);
		onFieldChange(!checkboxValue, setCheckboxValue);
	};

	const componentClassName = ClassNames(
		classes.checkbox,
		className
	);

	const iconClassName = ClassNames(
		classes.checkbox_icon,
		{
			[classes.checkbox__checked]: checkboxValue && !iconCheckClassNameFromProps,
			[iconCheckClassNameFromProps]: checkboxValue && iconCheckClassNameFromProps,
		},
		iconClassNameFromProps
	);

	return (
		<div
			onClick={ToggleCheckbox}
			className={componentClassName}
		>
			<Icon
				className={iconClassName}
				icon={check}
			/>
		</div>
	);
};


Checkbox.defaultProps = {
	value: false
};

Checkbox.propTypes = {
	value: PropTypes.bool,
	className: PropTypes.string,
	onFieldChange: PropTypes.func,
	iconClassName: PropTypes.string,
	iconCheckClassName: PropTypes.string
};

export { Checkbox };
