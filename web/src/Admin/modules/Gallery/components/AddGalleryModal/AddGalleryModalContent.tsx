import React, {useContext} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {addGallery} from '../../api';
import {GalleryContext} from '../../store';
import FormLayout, {
    FormLayoutItem,
    FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import {MediaSelector, Textbox} from '../../../../baseComponents/Form/Adapters';
import Form, {Field} from '../../../../baseComponents/Form';
import {FORMS} from '../../const';
import {FormContext} from '../../../../../store/FormContext';
import {getUniqueId, isNullOrUndefined} from '../../../../../utils';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';

const AddGalleryModalContent = (
    {
        handleClose: handleCloseFromProps,
        modalData
    }
) => {
    const {forms} = useContext(FormContext);
    const {setGallery} = useContext(GalleryContext);
    const {showNotification} = useContext(AdminAppContext);
    const {initialValues} = modalData;

    const handleAddGallery = (values) => {
        addGallery(values)
            .then(({data}) => {
                setGallery(data);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: '!!Галлерея добавлена'
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
            label="!!Закрыть"
            transparent
        />
    );

    const rightButtons = (
        <Button
            actionHandler={() => forms.ADD_GALLERY_FORM.submitForm()}
            label="!!Выбрать"
            type="primary"
        />
    );

    const isPreviewMode = !isNullOrUndefined(initialValues);

    return (
        <>
            <ModalHeader
                label="!!Добавить галлерею"
                handleClose={handleClose}
            />
            <ModalContent
                extraHeight
            >
                <Form
                    initialValues={initialValues}
                    onSubmit={handleAddGallery}
                    name={FORMS.ADD_GALLERY_FORM}
                >
                    <FormLayout>
                        <FormLayoutItemGroup>
                            <FormLayoutItem>
                                <Field
                                    previewMode={isPreviewMode}
                                    component={Textbox}
                                    name="name"
                                    label="!!!Название галлереи"
                                    required
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
                                    previewMode={isPreviewMode}
                                    component={Textbox}
                                    name="systemName"
                                    label="!!!Системное имя"
                                    required
                                    validate={{
                                        required: true,
                                        onlyLatinSymbols: true,
                                        length: {
                                            max: 20
                                        }
                                    }}
                                    hasTooltip
                                    toolTipMessage="!!Системное имя необходимо для вызова галлереи на стороне кликнта. Только латинские символы или цифры"
                                    placeholder="Системное имя"
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <Field
                                    previewMode={isPreviewMode}
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

export {AddGalleryModalContent};
