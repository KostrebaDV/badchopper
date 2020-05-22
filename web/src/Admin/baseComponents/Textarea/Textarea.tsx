import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';

const Textarea = (
	{
		name,
		value,
		onChange,
		placeholder,
		onFieldFocus,
		onFieldChange,
	}
) => {
	const handleInputChange = (value) => {
		onFieldChange(value);
		onChange(value);
	};

	return (
		<textarea
			name={name}
			value={value || ''}
			className={classes.textarea}
			placeholder={placeholder}
			onChange={e => handleInputChange(e.target.value)}
			onFocus={() => onFieldFocus(true)}
			onBlur={() => onFieldFocus(false)}
		/>
	);
};

Textarea.defaultProps = {
	value: '',
	onChange: () => {},
	onFieldFocus: () => {},
};

Textarea.propTypes = {
	onChange: PropTypes.func,
	onFieldFocus: PropTypes.func,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string
};

export { Textarea };
