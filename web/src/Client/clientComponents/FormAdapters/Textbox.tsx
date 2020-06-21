import React, { Component } from 'react';
import { Textbox as TexboxComponent } from '../Textbox/Textbox';

import { FormFieldBox as FieldBox } from '../FormFieldBox/FormFieldBox';

type TextboxType = {
    label: string;
    required: boolean;
    isValid: boolean;
    hasTooltip: boolean;
    toolTipMessage: string;
    toolTipIcon: string;
    displayInline: boolean;
    hasFocus: boolean;
    value: string | number;
    dynamicHeight: boolean;
}

class Textbox extends Component<TextboxType, {}> {
    static defaultProps: any;

	render () {
		const {
			label,
			required,
			isValid,
			hasTooltip,
			toolTipMessage,
			toolTipIcon,
			displayInline,
			hasFocus,
            dynamicHeight,
            value
		} = this.props;

		return (
			<FieldBox
                value={value}
				label={label}
				required={required}
				hasErrors={!isValid}
				displayInline={displayInline}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
				hasFocus={hasFocus}
                dynamicHeight={dynamicHeight}
			>
				<TexboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

Textbox.defaultProps = {
    previewMode: false
};

export { Textbox };
