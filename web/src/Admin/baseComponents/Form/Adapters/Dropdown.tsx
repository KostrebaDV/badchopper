import React, { Component } from 'react';
import { Dropdown as DropdownComponent } from '../../Dropdown/Dropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';

type DropdownType = {
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

class Dropdown extends Component<DropdownType, {}> {
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
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
				hasFocus={hasFocus}
				displayInline={displayInline}
			>
                //@ts-ignore
				<DropdownComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Dropdown };
