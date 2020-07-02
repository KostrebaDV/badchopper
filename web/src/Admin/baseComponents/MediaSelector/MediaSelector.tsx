import React, {useState, useEffect} from 'react';
import {MediaSelectModal} from './MediaSelectModal';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';
import plusIcon from '@iconify/icons-mdi/plus';
import {Icon} from '@iconify/react';
import ClassNames from 'classnames';
import {MediaSelectorItem} from './MediaSelectorItem';
import {getUniqueKey, isNull, isNullOrUndefined, removeArrayElementByValue} from '../../../utils';
import {Image} from '../Image/Image';
import {getAllImages} from '../../modules/Media/api';

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
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMediaId, setSelectedMediaId] = useState([]);
    const [mediaData, setMediaData] = useState<{_id: string}[]>([]);

    useEffect(() => {
        getAllImages()
            .then(({data}) => setMediaData(data));
        // eslint-disable-next-line
    }, []);

    const getMediaValue = (values) => {
        return singleSelect ? values[0] : values;
    };

    useEffect(() => {
        if (!isNull(value)) {
            setSelectedMediaId(value);
        }
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (values) => {
        onFieldChange(getMediaValue(values));
        setSelectedMediaId(values);
    };

    const handleDeleteProcessedImage = (id) => {
        const mutateSelectedMedia = removeArrayElementByValue(selectedMediaId, id);

        const mediaValues = mutateSelectedMedia.length === 0 ? null : getMediaValue(mutateSelectedMedia);

        onFieldChange(mediaValues);
        setSelectedMediaId(mutateSelectedMedia);
    };

    const componentClassName = ClassNames(
        {
            [classes.mediaSelector__noSelectedMedia]: !isValid
        },
        classes.mediaSelector
    );

    const showButton = singleSelect && selectedMediaId.length !== 0;

    const showDeleteButton = !previewMode && selectedMediaId;

    return mediaData.length !== 0 && (
        <>
            {
                !showButton && (
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
                showButton && selectedMediaId.length !== 0 && selectedMediaId.map(item => {
                    const currentItem = mediaData.find(mediaDataItem => item === mediaDataItem._id);

                    if (isNullOrUndefined(currentItem)) {
                        return (
                            <Image
                                width={150}
                                height={200}
                                src={null}
                                alt="no image"
                            />
                        );
                    }

                    return (
                        <MediaSelectorItem
                            key={getUniqueKey()}
                            item={currentItem}
                            showDeleteButton={showDeleteButton}
                            handleDeleteProcessedImage={handleDeleteProcessedImage}
                        />
                    );
                })
            }
            <MediaSelectModal
                isOpen={modalOpen}
                modalData={{mediaData, handleSubmit, ...mediaModalData, singleSelect}}
                handleClose={() => setModalOpen(!modalOpen)}
            />
        </>
    );
};

MediaSelector.defaultProps = {
    singleSelect: false,
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
