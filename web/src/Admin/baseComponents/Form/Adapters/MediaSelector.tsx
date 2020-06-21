import React, {Component} from 'react';
import {MediaSelector as MediaSelectorComponent} from '../../MediaSelector/MediaSelector';

type MediaSelectorType = {
    label: string;
    required: boolean;
    isValid: boolean;
    errorMessages: string;
    hasTooltip: boolean;
    toolTipMessage: string;
    toolTipIcon: string;
    displayInline: boolean;
    hasFocus: boolean;
    value: string | [];
    previewMode: boolean;
}

class MediaSelector extends Component<MediaSelectorType, {}> {
    static defaultProps: any;

    render () {
        return (
            //@ts-ignore
            <MediaSelectorComponent
                {...this.props}
            />
        );
    }
}

MediaSelector.defaultProps = {
    previewMode: false,
    value: []
};

export {MediaSelector};
