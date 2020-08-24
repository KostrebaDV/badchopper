import React from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup, FormLayoutPreviewItem} from '../../../../baseComponents/FormLayout';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';

const AssistanceDetailModalContent = (
    {
        modalData,
        handleClose
    }
) => {
    const rightButtons = (
        <Button
            actionHandler={handleClose}
            label="Закрыть"
            transparent
        />
    );

    return modalData && (
        <>
            <ModalHeader
                label={modalData?.name?.ru}
                handleClose={handleClose}
            />
            <ModalContent>
                    <FormLayout>
                        <FormLayoutItemGroup>
                            <FormLayoutItem>
                                <FormLayoutPreviewItem
                                    label="Описание RU"
                                    value={modalData?.description?.ru}
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <FormLayoutPreviewItem
                                    label="Описание EN"
                                    value={modalData?.description?.en}
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <FormLayoutPreviewItem
                                    label="Описание UA"
                                    value={modalData?.description?.ua}
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <FormLayoutPreviewItem
                                    label="Стоимость"
                                    value={`${modalData.price} грн.`}
                                />
                            </FormLayoutItem>
                        </FormLayoutItemGroup>
                    </FormLayout>
            </ModalContent>
            <ModalFooter>
                <ButtonGroup
                    rightButtons={rightButtons}
                />
            </ModalFooter>
        </>
    );
};

export {AssistanceDetailModalContent};
