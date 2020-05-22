import React, { Component } from 'react';
import { Textarea as TextareaComponent } from '../../Textarea/Textarea';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';

type TextareaType = {
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

class Textarea extends Component<TextareaType, {}> {
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
				errorMessages={errorMessages}
				displayInline={displayInline}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
				hasFocus={hasFocus}
			>
                //@ts-ignore
				<TextareaComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textarea };
