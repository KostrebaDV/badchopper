import React, {FC} from 'react';

import classes from './styles/index.module.scss';
import {TextareaType} from './types';

const Textarea: FC<TextareaType> = (
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

        // @ts-ignore
		onFieldChange(value);

        // @ts-ignore
		onChange(value);
	};

	return (
		<textarea
			name={name}
			value={value || ''}
			className={classes.textarea}
			placeholder={placeholder}
			onChange={e => handleInputChange(e.target.value)}

            // @ts-ignore
			onFocus={() => onFieldFocus(true)}

            // @ts-ignore
			onBlur={() => onFieldFocus(false)}
		/>
	);
};

Textarea.defaultProps = {
	value: '',
	onChange: () => {},
	onFieldFocus: () => {},
};

export { Textarea };
