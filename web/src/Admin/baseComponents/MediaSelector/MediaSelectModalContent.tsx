import React, {useState, useRef} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../Modal';
import {ButtonGroup} from '../ButtonGroup/ButtonGroup';
import {Button} from '../Button/Button';
import {MediaSelectModalMediaItem} from './MediaSelectModalMediaItem';
import {SelectedItemsType} from './types';

import classes from './styles/index.module.scss';
import {isNull, isNullOrUndefined, removeArrayElementByValue} from '../../../utils';

const MediaSelectModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {
        mediaData,
        modalTitle,
        singleSelect,
        handleSubmit: handleSubmitFromModalData,
        selectedMediaId: selectedMediaIdFromProps
    } = modalData;

    const [selectedItems, setSelectedItems] = useState<SelectedItemsType>([]);
    const checkboxAPIRef = useRef(null);
    const selectedMediaRef = useRef<SelectedItemsType>(selectedMediaIdFromProps);

    const handleSingleItem = (id) => {
        setSelectedItems([id]);
    };

    const handleMultipleItem = (id, isChecked) => {
        const isItemSelected = selectedMediaRef.current.includes(id);

        if (isChecked && !isItemSelected) {
            selectedMediaRef.current.push(id);
        }
        if (!isChecked && isItemSelected) {
            selectedMediaRef.current = removeArrayElementByValue(selectedMediaRef.current, id);
        }

        setSelectedItems(selectedMediaRef.current);
    };

    const handleItemCheck = (id: string, isChecked: boolean, checkboxAPI) => {
        if (singleSelect && !isNull(checkboxAPIRef.current) && checkboxAPI !== checkboxAPIRef.current) {
            // @ts-ignore
            checkboxAPIRef.current(false);
        }

        checkboxAPIRef.current = checkboxAPI;

        if (singleSelect) {
            handleSingleItem(id);
        } else {
            handleMultipleItem(id, isChecked);
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
            label="!!Выбрать"
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
            <ModalContent extraHeight>
                {
                    hasItems && (
                        <div className={classes.mediaSelectModalContent}>
                            {
                                mediaData.map(item => {
                                    let isCheck = false;

                                    if (selectedMediaRef.current.length !== 0) {
                                        isCheck = selectedMediaRef.current.some(selectedItemId => selectedItemId === item._id);
                                    }

                                    return (
                                        <MediaSelectModalMediaItem
                                            item={item}
                                            key={item._id}
                                            isCheck={isCheck}
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
