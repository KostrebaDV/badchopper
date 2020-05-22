import React, { Component } from 'react';
import { Dropdown as DropdownComponent } from '../../Dropdown/Dropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';
import {PreviewFiled} from '../../PreviewFiled/PreviewFiled';

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
    value: string | number;
    previewMode: boolean;
}

class Dropdown extends Component<DropdownType, {}> {
    static defaultProps: any;

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
			hasFocus,
            previewMode,
            value
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
                previewMode={previewMode}
			>
                <>
                    {
                        !previewMode && (
                            //@ts-ignore
                            <DropdownComponent
                                {...this.props}
                            />
                        )
                    }
                    {
                        previewMode && (
                            <PreviewFiled
                                value={value}
                            />
                        )
                    }
                </>
			</FieldBox>
		);
	}
}

Dropdown.defaultProps = {
    previewMode: false
};

export { Dropdown };
