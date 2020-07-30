import React, {useContext} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {addAssistance} from '../../api';
import {FORMS} from '../../const';
import Form, {Field} from '../../../../baseComponents/Form';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Textbox, MediaSelector} from '../../../../baseComponents/Form/Adapters';
import {AssistanceContext} from '../../store';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../../../utils';
import {FormContext} from '../../../../../store/FormContext';
import {MultiLanguageField} from '../../../../baseComponents/MultiLanguageField/MultiLanguageField';
import {LANGUAGE_CODES} from '../../../../../const';

const AddAssistanceModalContent = (
    {
        handleClose
    }
) => {
    const {forms} = useContext(FormContext);
    const {setAssistance} = useContext(AssistanceContext);
    const {showNotification} = useContext(AdminAppContext);

    const handleAddAssistance = (values) => {
        const {
            nameEN,
            nameRU,
            nameUA,
            descriptionEN,
            descriptionRU,
            descriptionUA,
            ...rest
        } = values

        const requestData = {
            ...rest,
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
        }

        addAssistance(requestData)
            .then(({data}) => {
                setAssistance(data);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: 'Услуга добавлена'
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
            actionHandler={() => forms.ADD_ASSISTANCE_FORM.submitForm()}
            label="Добавить"
            type="primary"
        />
    );

    return (
        <>
            <ModalHeader
                label="Новая услуга"
                handleClose={handleClose}
            />
            <ModalContent>
                <Form
                    onSubmit={handleAddAssistance}
                    name={FORMS.ADD_ASSISTANCE_FORM}
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
                                    label='название услуги'
                                    required
                                    languages={LANGUAGE_CODES}
                                />
                                <FormLayoutItem>
                                    <Field
                                        component={MediaSelector}
                                        name="imageId"
                                        required
                                        singleSelect
                                        validate={{
                                            required: true
                                        }}
                                    />
                                </FormLayoutItem>
                            </FormLayoutItemGroup>
                            <MultiLanguageField
                                name='description'
                                adapter={Textbox}
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
                                            required: true,
                                            number: true
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

export {AddAssistanceModalContent};
