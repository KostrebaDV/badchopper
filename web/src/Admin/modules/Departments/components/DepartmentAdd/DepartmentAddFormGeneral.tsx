import React, {FC} from 'react';
import {PaddingBox} from '../../../../baseComponents/PaddingBox/PaddingBox';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {Field} from '../../../../baseComponents/Form';
import {Textarea, Textbox} from '../../../../baseComponents/Form/Adapters';
import FormLayout from '../../../../baseComponents/FormLayout';
import {DepartmentAddFormGeneralType} from './types';
import {MultiLanguageField} from '../../../../baseComponents/MultiLanguageField/MultiLanguageField';
import {LANGUAGE_CODES} from '../../../../../const';

const DepartmentAddFormGeneral: FC<DepartmentAddFormGeneralType> = (
    {
        editMode
    }
) => {

    return (
        <>
			<PaddingBox hrSmall>
				<Typography bold='600' variant='18'>
					Общая информация
				</Typography>
			</PaddingBox>
            <FormLayout>
                <FormLayoutItemGroup>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="name"
                            label="Название филиала"
                            required
                            previewMode={!editMode}
                            validate={{
                                required: true
                            }}
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <MultiLanguageField
                            name='description'
                            adapter={Textarea}
                            required
                            previewMode={!editMode}
                            label='Описание'
                            languages={LANGUAGE_CODES}
                        />
                    </FormLayoutItem>
                    <FormLayoutItem>
                        <MultiLanguageField
                            name='city'
                            adapter={Textbox}
                            required
                            previewMode={!editMode}
                            label='Город'
                            languages={LANGUAGE_CODES}
                        />
                    </FormLayoutItem>
                    <FormLayoutItemGroup
                        inline
                        noPadding
                        grid="8-_1-4"
                        gridColumn={13}
                    >
                        <FormLayoutItem>
                            <MultiLanguageField
                                name='street'
                                adapter={Textbox}
                                required
                                previewMode={!editMode}
                                label='Улица'
                                languages={LANGUAGE_CODES}
                            />
                        </FormLayoutItem>
                        <FormLayoutItem>
                            <Field
                                component={Textbox}
                                name="number"
                                label="Номер"
                                required
                                previewMode={!editMode}
                                validate={{
                                    required: true
                                }}
                            />
                        </FormLayoutItem>
                    </FormLayoutItemGroup>
                    <FormLayoutItem>
                        <Field
                            component={Textbox}
                            name="phone"
                            label="Телефон"
                            required
                            previewMode={!editMode}
                            placeholder="+38_(000)_000_00_00"
                            validate={{
                                required: true
                            }}
                            hasTooltip
                            toolTipMessage="вместо символа '_' поставте пробел"
                        />
                    </FormLayoutItem>
                    <FormLayoutItemGroup
                        inline
                        noPadding
                        gridColumn={13}
                        grid="6-_1-6"
                        label="Координаты на карте"
                    >
                        <FormLayoutItem>
                            <Field
                                component={Textbox}
                                name="latitude"
                                label="Широта"
                                required
                                previewMode={!editMode}
                                validate={{
                                    required: true
                                }}
                                placeholder="00.000000"
                            />
                        </FormLayoutItem>
                        <FormLayoutItem>
                            <Field
                                component={Textbox}
                                name="longitude"
                                label="Долгота"
                                required
                                previewMode={!editMode}
                                validate={{
                                    required: true
                                }}
                                placeholder="00.000000"
                            />
                        </FormLayoutItem>
                    </FormLayoutItemGroup>
                </FormLayoutItemGroup>
            </FormLayout>
        </>
    );
};

DepartmentAddFormGeneral.defaultProps = {
    editMode: true
};

export {DepartmentAddFormGeneral};
