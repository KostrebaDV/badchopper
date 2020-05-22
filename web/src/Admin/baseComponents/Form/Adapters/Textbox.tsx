import React, { Component } from 'react';
import { Textbox as TexboxComponent } from '../../Textbox/Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';

type TextboxType = {
    label: string;
    required: boolean;
    isValid: boolean;
    errorMessages: string;
    hasTooltip: boolean;
    toolTipMessage: string;
    toolTipIcon: string;
    displayInline: boolean;
    hasFocus: boolean;
}

class Textbox extends Component<TextboxType, {}> {
	render () {
		const {
			label,
			required,
			isValid,
			errorMessages,
			hasTooltip,
			toolTipMessage,
			toolTipIcon,
			displayInline,
			hasFocus
		} = this.props;

		return (
			<FieldBox
				label={label}
				required={required}
				hasErrors={!isValid}
				displayInline={displayInline}
				errorMessages={errorMessages}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
				hasFocus={hasFocus}
			>
				<TexboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textbox };
