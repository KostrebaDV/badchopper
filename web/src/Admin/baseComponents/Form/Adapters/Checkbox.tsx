import React, { Component } from 'react';
import { Checkbox as CheckboxComponent } from '../../Checkbox/Checkbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';

type CheckboxType = {
    label: string;
    isValid: boolean;
    hasTooltip: boolean;
    toolTipIcon: string;
    displayInline: boolean;
    toolTipMessage: string;
}

class Checkbox extends Component<CheckboxType, {}> {
	render () {
		const {
			label,
			isValid,
			hasTooltip,
			toolTipIcon,
			displayInline,
			toolTipMessage
		} = this.props;

		return (
            //@ts-ignore
			<FieldBox
				label={label}
				hasBorder={false}
				hasErrors={!isValid}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				displayInline={displayInline}
				toolTipMessage={toolTipMessage}
			>
				<CheckboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Checkbox };
