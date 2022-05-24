import React, {useContext} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {updateAssistance as updateAssistanceAPI} from '../../api';
import {FORMS} from '../../const';
import Form, {Field} from '../../../../baseComponents/Form';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Textbox, Textarea, MediaSelector} from '../../../../baseComponents/Form/Adapters';
import {AssistanceContext} from '../../store';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../../../utils';
import {FormContext} from '../../../../../store/FormContext';
import {LANGUAGE_CODES} from '../../../../../const';
import {MultiLanguageField} from '../../../../baseComponents/MultiLanguageField/MultiLanguageField';

const EditAssistanceModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {forms} = useContext(FormContext);
    const {updateAssistance} = useContext(AssistanceContext);
    const {showNotification} = useContext(AdminAppContext);

    const handleUpdateAssistance = (values) => {
        const {
            _id,
            nameEN,
            nameRU,
            nameUA,
            descriptionEN,
            descriptionRU,
            descriptionUA,
            ...rest
        } = values;

        const requestData = {
            ...rest,
            id: modalData._id,
            name: {
                ua: nameUA,
                ru: nameRU,
                en: nameEN,
            },
            description: {
                ua: descriptionUA,
                ru: descriptionRU,
                en: descriptionEN,
            }
        };

        updateAssistanceAPI(requestData)
            .then(({data}) => {
                updateAssistance([data]);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `Услуга "${data.name.ru}" обновлена`,
                        duration: 1000,
                    });
                }
            });
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
            actionHandler={() => forms.UPDATE_ASSISTANCE_FORM.submitForm()}
            label="Редактировать"
            type="primary"
        />
    );

    const initialValues = {
        imageId: modalData.imageId,
        price: modalData.price,
        nameUA: modalData?.name?.ua,
        nameRU: modalData?.name?.ru,
        nameEN: modalData?.name?.en,
        descriptionUA: modalData?.description?.ua,
        descriptionRU: modalData?.description?.ru,
        descriptionEN: modalData?.description?.en,
    };

    return modalData && (
        <>
            <ModalHeader
                label={`Редактировать "${modalData?.name?.ru}"`}
                handleClose={handleClose}
            />
            <ModalContent>
                <Form
                    initialValues={initialValues}
                    onSubmit={handleUpdateAssistance}
                    name={FORMS.UPDATE_ASSISTANCE_FORM}
                >
                    <FormLayout>
                        <FormLayoutItemGroup>
                            <FormLayoutItemGroup
                                noPadding
                                grid="6-_1-6"
                                gridColumn={13}
                                inline
                            >
                                <MultiLanguageField
                                    name='name'
                                    adapter={Textbox}
                                    required
                                    label='название услуги'
                                    languages={LANGUAGE_CODES}
                                />
                                <FormLayoutItem>
                                    <Field
                                        component={MediaSelector}
                                        name="imageId"
                                        required
                                        value={[modalData.imageId]}
                                        singleSelect
                                        validate={{
                                            required: true
                                        }}
                                    />
                                </FormLayoutItem>
                            </FormLayoutItemGroup>
                            <MultiLanguageField
                                name='description'
                                adapter={Textarea}
                                label='описание'
                                required
                                languages={LANGUAGE_CODES}
                            />
                            <FormLayoutItemGroup
                                inline
                                noPadding
                                grid="4-8"
                                singleItem
                            >
                                <FormLayoutItem>
                                    <Field
                                        component={Textbox}
                                        name="price"
                                        label="Стоимость"
                                        required
                                        validate={{
                                            required: true
                                        }}
                                        placeholder="00.00"
                                    />
                                </FormLayoutItem>
                            </FormLayoutItemGroup>
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

export {EditAssistanceModalContent};
