import React, { Component } from 'react';
import { CheckboxGroup as CheckboxGroupComponent } from '../../CheckboxGroup/CheckboxGroup';

import { FormFieldBox as FieldBox } from '../../FormFieldBox/FormFieldBox';

type CheckboxType = {
    label: string;
    required: boolean;
    items: [];
    isValid: boolean;
    errorMessages: string;
    hasTooltip: boolean;
    toolTipMessage: string;
    toolTipIcon: string;
    displayInline: boolean;
    hasFocus: boolean;
    value: [];
    previewMode: boolean;
    disabled: boolean;
}

class CheckboxGroup extends Component<CheckboxType, {}> {
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
            errorMessages,
            hasFocus,
            required
        } = this.props;

        return (
            <FieldBox
                label={label}
                hasBorder={false}
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
                <CheckboxGroupComponent
                    {...this.props}
                />
            </FieldBox>
        );
    }
}

CheckboxGroup.defaultProps = {
    previewMode: false
};

export { CheckboxGroup };
