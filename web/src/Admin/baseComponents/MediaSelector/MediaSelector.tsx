import React, {useState, useEffect} from 'react';
import {MediaSelectModal} from './MediaSelectModal';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';
import plusIcon from '@iconify/icons-mdi/plus';
import {Icon} from '@iconify/react';
import ClassNames from 'classnames';
import {isNull, removeArrayElementByValue, isUndefined} from '../../../utils';
import {getAllImages} from '../../modules/Media/api';
import {MediaSelectorSingleItemPreview} from './MediaSelectorSingleItemPreview';
import {MediaSelectorMultipleItemPreview} from './MediaSelectorMultipleItemPreview';
import {SelectedItemsType} from './types';

const MediaSelector = (
    {
        onFieldChange,
        singleSelect,
        required,
        isValid,
        value,
        mediaModalData,
        previewMode
    }
) => {
    const [selectedMedia, setSelectedMedia] = useState<SelectedItemsType>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [mediaData, setMediaData] = useState<{_id: string}[]>([]);
    //const selectedMediaRef = useRef<SelectedItemsType>([]);

    useEffect(() => {
        getAllImages()
            .then(({data}) => setMediaData(data));
        // eslint-disable-next-line
    }, []);

    const getMediaValue = (values) => {
        return singleSelect ? values[0] : values;
    };

    useEffect(() => {
        if (!isNull(value) && !isUndefined(value) && value.lenght !== 0) {
            setSelectedMedia(value);
        }
        // eslint-disable-next-line
    }, [value]);

    console.log(value);

    const handleSubmit = (values) => {
        onFieldChange(getMediaValue(values));
        setSelectedMedia(values);
    };

    const handleDeleteProcessedImage = (id) => {
        const imageArray = removeArrayElementByValue(selectedMedia, id);
        setSelectedMedia(imageArray);

        const mediaValues = selectedMedia.length === 0 ? null : getMediaValue(imageArray);

        onFieldChange(mediaValues);
    };

    const componentClassName = ClassNames(
        {
            [classes.mediaSelector__noSelectedMedia]: !isValid
        },
        classes.mediaSelector
    );

    const showButton = singleSelect && selectedMedia.length !== 0;

    const showDeleteButton = !previewMode && selectedMedia;

    return mediaData.length !== 0 && (
        <>
            {
                !showButton && !previewMode && (
                    <div
                        className={componentClassName}
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <Icon
                            icon={plusIcon}
                        />
                    </div>
                )
            }
            {
                singleSelect && selectedMedia.length !== 0 && (
                    <MediaSelectorSingleItemPreview
                        mediaData={mediaData}
                        showDeleteButton={showDeleteButton}
                        selectedItemId={selectedMedia[0]}
                        handleDeleteProcessedImage={handleDeleteProcessedImage}
                    />
                )
            }
            {
                !singleSelect && selectedMedia.length !== 0 && (
                    <MediaSelectorMultipleItemPreview
                        mediaData={mediaData}
                        showDeleteButton={showDeleteButton}
                        selectedItemId={selectedMedia}
                        handleDeleteProcessedImage={handleDeleteProcessedImage}
                    />
                )
            }
            <MediaSelectModal
                isOpen={modalOpen}
                modalData={
                    {
                        mediaData,
                        handleSubmit,
                        ...mediaModalData,
                        singleSelect,
                        selectedMediaId: selectedMedia
                    }
                }
                handleClose={() => setModalOpen(!modalOpen)}
            />
        </>
    );
};

MediaSelector.defaultProps = {
    singleSelect: false,
    previewMode: false,
    value: []
};

MediaSelector.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    singleSelect: PropTypes.bool,
    onFieldChange: PropTypes.func,
};

export {MediaSelector};
