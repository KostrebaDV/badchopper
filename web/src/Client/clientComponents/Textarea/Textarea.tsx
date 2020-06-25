import React, {FC} from 'react';

import ClassNames from 'classnames';
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
        hasFocus
	}
) => {
	const handleInputChange = (value) => {
        onFieldChange(value);
        onChange(value);
	};

    const componentClassName = ClassNames(
        classes.textarea,
        {
            [classes.textarea__focus]: hasFocus
        }
    );

	return (
		<textarea
			name={name}
			value={value || ''}
			className={componentClassName}
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

export { Textarea };
