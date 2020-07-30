import React, {useContext} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {editGallery} from '../../api';
import {GalleryContext} from '../../store';
import FormLayout, {
    FormLayoutItem,
    FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import {MediaSelector, Textbox} from '../../../../baseComponents/Form/Adapters';
import Form, {Field} from '../../../../baseComponents/Form';
import {FORMS} from '../../const';
import {FormContext} from '../../../../../store/FormContext';
import {getUniqueId} from '../../../../../utils';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';

const EditGalleryModalContent = (
    {
        handleClose: handleCloseFromProps,
        modalData
    }
) => {
    const {forms} = useContext(FormContext);
    const {updateGallery} = useContext(GalleryContext);
    const {showNotification} = useContext(AdminAppContext);
    const {initialValues} = modalData;

    const handleAddGallery = (values) => {
        const {_id, ...rest} = values;

        const requestValues = {
            id: initialValues._id,
            ...rest
        };

        editGallery(requestValues)
            .then(({data}) => {
                updateGallery(data);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: 'Галлерея добавлена'
                    });
                }
            });
    };

    const handleClose = () => {
        handleCloseFromProps();
    };

    const leftButtons = (
        <Button
            actionHandler={handleClose}
            label="Закрыть"
            transparent
        />
    );

    const rightButtons = (
        <Button
            actionHandler={() => forms.EDIT_GALLERY_FORM.submitForm()}
            label="Обновить"
            type="primary"
        />
    );

    return (
        <>
            <ModalHeader
                label="Обновить галлерею"
                handleClose={handleClose}
            />
            <ModalContent
                extraHeight
            >
                <Form
                    initialValues={initialValues}
                    onSubmit={handleAddGallery}
                    name={FORMS.EDIT_GALLERY_FORM}
                >
                    <FormLayout>
                        <FormLayoutItemGroup>
                            <FormLayoutItem>
                                <Field
                                    component={Textbox}
                                    name="name"
                                    label="Название галлереи"
                                    required
                                    previewMode
                                    validate={{
                                        required: true,
                                        length: {
                                            max: 20
                                        }
                                    }}
                                    placeholder="Название галлереи"
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <Field
                                    component={Textbox}
                                    name="systemName"
                                    label="Системное имя"
                                    required
                                    previewMode
                                    validate={{
                                        required: true,
                                        onlyLatinSymbols: true,
                                        length: {
                                            max: 20
                                        }
                                    }}
                                    hasTooltip
                                    toolTipMessage="Системное имя необходимо для вызова галлереи на стороне кликнта. Только латинские символы или цифры"
                                    placeholder="Системное имя"
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <Field
                                    component={MediaSelector}
                                    name="imagesId"
                                    required
                                    singleSelect={false}
                                    validate={{
                                        required: true
                                    }}
                                />
                            </FormLayoutItem>
                        </FormLayoutItemGroup>
                    </FormLayout>
                </Form>
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

export {EditGalleryModalContent};
