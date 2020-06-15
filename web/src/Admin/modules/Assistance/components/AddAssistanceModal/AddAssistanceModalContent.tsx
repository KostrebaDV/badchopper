import React, {useContext} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {addAssistance} from '../../api';
import {FORMS} from '../../const';
import Form, {Field} from '../../../../baseComponents/Form';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Textbox, Textarea} from '../../../../baseComponents/Form/Adapters';
import {AdminAppFormContext} from '../../../../App/store/AdminAppFormContext/consts';
import {AssistanceContext} from '../../store';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../../../utils';

const AddAssistanceModalContent = (
    {
        handleClose
    }
) => {
    const {forms} = useContext(AdminAppFormContext);
    const {setAssistance} = useContext(AssistanceContext);
    const {showNotification} = useContext(AdminAppContext);

    const handleAddAssistance = (values) => {
        addAssistance(values)
            .then(({data}) => {
                setAssistance(data);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: '!! Услуга добавлена'
                    })
                }
            })
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
            actionHandler={() => forms.ADD_ASSISTANCE_FORM.submitForm()}
            label="!!Добавить"
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
                            <FormLayoutItem>
                                <Field
                                    component={Textbox}
                                    name="name"
                                    label="!!!название услуги"
                                    required
                                    validate={{
                                        required: true
                                    }}
                                    placeholder="название услуги"
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <Field
                                    component={Textarea}
                                    name="description"
                                    label="!!!Описание"
                                    required
                                    validate={{
                                        required: true
                                    }}
                                    placeholder="Описание"
                                />
                            </FormLayoutItem>
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
                                        label="!!!Стоимость"
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

export {AddAssistanceModalContent};
