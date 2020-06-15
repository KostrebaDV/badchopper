import React, {useContext} from 'react';
import {ModalContent, ModalFooter, ModalHeader} from '../../../../baseComponents/Modal';
import {ButtonGroup} from '../../../../baseComponents/ButtonGroup/ButtonGroup';
import {Button} from '../../../../baseComponents/Button/Button';
import {updateAssistance as updateAssistanceAPI} from '../../api';
import {FORMS} from '../../const';
import Form, {Field} from '../../../../baseComponents/Form';
import FormLayout, {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Textbox, Textarea} from '../../../../baseComponents/Form/Adapters';
import {AdminAppFormContext} from '../../../../App/store/AdminAppFormContext/consts';
import {AssistanceContext} from '../../store';
import {AdminAppContext} from '../../../../App/store/AdminAppContext/const';
import {getUniqueId} from '../../../../../utils';

const EditAssistanceModalContent = (
    {
        handleClose,
        modalData
    }
) => {
    const {forms} = useContext(AdminAppFormContext);
    const {updateAssistance} = useContext(AssistanceContext);
    const {showNotification} = useContext(AdminAppContext);

    const handleUpdateAssistance = (values) => {
        const { _id, ...rest } = values;

        const requestValues = {
            id: modalData._id,
          ...rest
        };

        updateAssistanceAPI(requestValues)
            .then(({data}) => {
                updateAssistance([data]);
                handleClose();

                if (typeof showNotification !== 'undefined') {
                    showNotification({
                        id: getUniqueId(),
                        message: `!! Услуга "${data.name}" обновлена`
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
            actionHandler={() => forms.UPDATE_ASSISTANCE_FORM.submitForm()}
            label="!!Редактировать"
            type="primary"
        />
    );

    return (
        <>
            <ModalHeader
                label={`!!Редактировать "${modalData.name}"`}
                handleClose={handleClose}
            />
            <ModalContent>
                <Form
                    initialValues={modalData}
                    onSubmit={handleUpdateAssistance}
                    name={FORMS.UPDATE_ASSISTANCE_FORM}
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

export {EditAssistanceModalContent};
