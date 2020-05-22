import React, {useState, useRef} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../Modal';
import {ButtonGroup} from '../ButtonGroup/ButtonGroup';
import {Button} from '../Button/Button';
import {MediaSelectModalMediaItem} from './MediaSelectModalMediaItem';
import {SelectedItemsType} from './types';

import classes from './styles/index.module.scss';
import {isNull, isNullOrUndefined} from '../../../utils';

const MediaSelectModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {
        modalTitle,
        handleSubmit: handleSubmitFromModalData,
        rightButtonLabel,
        mediaData,
        singleSelect
    } = modalData;

    const [selectedItems, setSelectedItems] = useState<SelectedItemsType>([]);
    const checkboxAPIRef = useRef(null);

    const handleItemCheck = (id: string, value: boolean, checkboxAPI) => {
        if (singleSelect && !isNull(checkboxAPIRef.current) && checkboxAPI !== checkboxAPIRef.current) {
            // @ts-ignore
            checkboxAPIRef.current(false);
        }

        checkboxAPIRef.current = checkboxAPI;

        if (singleSelect) {
            setSelectedItems([id]);
        } else {
            // add logic to create bulk of selected items
        }
    };

    const handleSubmit = () => {
        handleSubmitFromModalData(selectedItems);
        handleClose();
    };

    const leftButtons = (
        <Button
            actionHandler={handleClose}
            label="!!Закрыть"
            type="secondary"
        />
    );

    const rightButtons = (
        <Button
            actionHandler={handleSubmit}
            label={rightButtonLabel}
            type="primary"
        />
    );

    const hasItems = !isNullOrUndefined(mediaData) && mediaData.length !== 0;

    return (
        <>
            <ModalHeader
                label={modalTitle}
                handleClose={handleClose}
            />
            <ModalContent>
                {
                    hasItems && (
                        <div  className={classes.mediaSelectModalContent}>
                            {
                                mediaData.map(item => {
                                    return (
                                        <MediaSelectModalMediaItem
                                            key={item._id}
                                            item={item}
                                            handleItemCheck={handleItemCheck}
                                        />
                                    );
                                })
                            }
                        </div>
                    )
                }
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    leftButtons={leftButtons}
                    rightButtons={rightButtons}
                />
            </ModalFooter>
        </>
    );
};

export {MediaSelectModalContent};
