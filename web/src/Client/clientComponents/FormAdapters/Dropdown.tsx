import React, { Component } from 'react';
import { Dropdown as DropdownComponent } from '../Dropdown/Dropdown';

import { FormFieldBox as FieldBox } from '../FormFieldBox/FormFieldBox';

type DropdownType = {
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

class Dropdown extends Component<DropdownType, {}> {
    static defaultProps: any;

	render () {
		const {
			label,
			required,
			isValid,
			displayInline,
			hasFocus,
            value,
            dynamicHeight
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
                <DropdownComponent
                    {...this.props}
                />
			</FieldBox>
		);
	}
}

Dropdown.defaultProps = {
    previewMode: false
};

export { Dropdown };
