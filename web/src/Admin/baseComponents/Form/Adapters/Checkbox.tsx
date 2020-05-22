import React, { Component } from 'react';
import { Checkbox as CheckboxComponent } from '../../Checkbox/Checkbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';
import {PreviewFiled} from '../../PreviewFiled/PreviewFiled';

type CheckboxType = {
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

class Checkbox extends Component<CheckboxType, {}> {
    static defaultProps: any;

	render () {
		const {
			label,
			isValid,
			hasTooltip,
			toolTipIcon,
			displayInline,
			toolTipMessage,
            previewMode,
            value,
            errorMessages,
            hasFocus,
            required
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
                previewMode={previewMode}
			>
                <>
                    {
                        !previewMode && (
                            //@ts-ignore
                            <CheckboxComponent
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

Checkbox.defaultProps = {
    previewMode: false
};

export { Checkbox };
