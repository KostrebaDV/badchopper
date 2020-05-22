import React, { Component } from 'react';
import { AjaxDropdown as AjaxDropdownComponent } from '../../AjaxDropdown/AjaxDropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';
import {PreviewFiled} from '../../PreviewFiled/PreviewFiled';

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
    previewMode: boolean;
    value: string | number;
}

class AjaxDropdown extends Component<AjaxDropdownProps, {}> {
    static defaultProps: any;

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
			displayInline,
            previewMode,
            value
		} = this.props;

		return (
			<FieldBox
                previewMode={previewMode}
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
                <>
                    {
                        !previewMode && (
                            //@ts-ignore
                            <AjaxDropdownComponent
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

AjaxDropdown.defaultProps = {
    previewMode: false
};

export { AjaxDropdown };
