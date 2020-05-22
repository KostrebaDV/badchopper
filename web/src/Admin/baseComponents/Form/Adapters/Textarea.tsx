import React, { Component } from 'react';
import { Textarea as TextareaComponent } from '../../Textarea/Textarea';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';
import {PreviewFiled} from '../../PreviewFiled/PreviewFiled';

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
    value: string | number;
    previewMode: boolean;
}

class Textarea extends Component<TextareaType, {}> {
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
				displayInline={displayInline}
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
                            <TextareaComponent
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

Textarea.defaultProps = {
    previewMode: false
};

export { Textarea };
