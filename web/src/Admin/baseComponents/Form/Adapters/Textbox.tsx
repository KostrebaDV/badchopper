import React, { Component } from 'react';
import { Textbox as TexboxComponent } from '../../Textbox/Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';
import {PreviewFiled} from '../../PreviewFiled/PreviewFiled';

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
    value: string | number;
    previewMode: boolean;
}

class Textbox extends Component<TextboxType, {}> {
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
                            <TexboxComponent
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

Textbox.defaultProps = {
    previewMode: false
};

export { Textbox };
