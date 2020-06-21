import React, { Component } from 'react';
import { Textarea as TextareaComponent } from '../Textarea/Textarea';

import { FormFieldBox as FieldBox } from '../FormFieldBox/FormFieldBox';

type TextareaType = {
    label: string;
    required: boolean;
    isValid: boolean;
    displayInline: boolean;
    dynamicHeight: boolean;
    hasFocus: boolean;
    value: string | number | null;
    onChange: () => void;
    onFieldFocus: () => void;
    onFieldChange: () => void;
}

class Textarea extends Component<TextareaType, {}> {
    static defaultProps: any;

	render () {
		const {
			label,
			required,
			isValid,
			displayInline,
            dynamicHeight,
			hasFocus,
            onChange,
            onFieldFocus,
            onFieldChange,
            value
		} = this.props;

		return (
			<FieldBox
                value={value}
				label={label}
				required={required}
				hasErrors={!isValid}
				displayInline={displayInline}
				hasFocus={hasFocus}
                dynamicHeight={dynamicHeight}
			>
				<TextareaComponent
                    onChange={onChange}
                    onFieldFocus={onFieldFocus}
                    onFieldChange={onFieldChange}
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

Textarea.defaultProps = {
    previewMode: false
};

export { Textarea };
