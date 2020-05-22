import React, { Component } from 'react';
import { AjaxDropdown as AjaxDropdownComponent } from '../../AjaxDropdown/AjaxDropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';

type AjaxDropdownProps = {
    label: string;
    isValid: boolean;
    required: boolean;
    hasFocus: boolean;
    hasTooltip: boolean;
    toolTipIcon: string;
    errorMessages: string;
    toolTipMessage: string;
    displayInline: boolean;
}

class AjaxDropdown extends Component<AjaxDropdownProps, {}> {
	render () {
		const {
			label,
			isValid,
			required,
			hasFocus,
			hasTooltip,
			toolTipIcon,
			errorMessages,
			toolTipMessage,
			displayInline
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
				displayInline={displayInline}
				hasFocus={hasFocus}
			>
                //@ts-ignore
				<AjaxDropdownComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { AjaxDropdown };
