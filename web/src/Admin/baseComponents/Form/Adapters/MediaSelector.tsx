import React, {Component} from 'react';
import {MediaSelector as MediaSelectorComponent} from '../../MediaSelector/MediaSelector';
import {PreviewFiled} from '../../PreviewFiled/PreviewFiled';

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
    value: string | number;
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
    previewMode: false
};

export {MediaSelector};
