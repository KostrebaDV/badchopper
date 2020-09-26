import React from 'react';
import {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {Field} from '../../../../baseComponents/Form';
import {Dropdown, MediaSelector, Textarea, Textbox} from '../../../../baseComponents/Form/Adapters';
import {positionDropDownItems} from '../../const';
import FormLayout from '../../../../baseComponents/FormLayout';

const StaffModalFormLayout = (
    {
        mediaId,
        isPreviewMode,
        mediaModalData,
        positionDropDownValue
    }
) => {
    return (
        <FormLayout>
            <FormLayoutItemGroup>
                <GridLayout>
                    <GridLayoutRow
                        gridColumn={13}
                        grid='6-_1-6'
                    >
                        <FormLayoutItemGroup noPadding>
                            <FormLayoutItem>
                                <Field
                                    previewMode={isPreviewMode}
                                    component={Textbox}
                                    name="name"
                                    label="Имя"
                                    required
                                    validate={{
                                        required: true,
                                        length: {
                                            max: 20
                                        }
                                    }}
                                    placeholder="Имя"
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <Field
                                    previewMode={isPreviewMode}
                                    component={Textbox}
                                    name="surname"
                                    label="Фамилия"
                                    required
                                    validate={{
                                        required: true,
                                        length: {
                                            max: 20
                                        }
                                    }}
                                    placeholder="Фамилия"
                                />
                            </FormLayoutItem>
                            <FormLayoutItem>
                                <Field
                                    previewMode={isPreviewMode}
                                    component={Textbox}
                                    name="patronymic"
                                    label="Отчество"
                                    validate={{
                                        length: {
                                            max: 20
                                        }
                                    }}
                                    placeholder="Отчество"
                                />
                            </FormLayoutItem>
                        </FormLayoutItemGroup>
                        <FormLayoutItem>
                            <Field
                                previewMode={isPreviewMode}
                                component={MediaSelector}
                                mediaModalData={mediaModalData}
                                name="imageId"
                                required
                                value={mediaId}
                                singleSelect
                                validate={{
                                    required: true
                                }}
                            />
                        </FormLayoutItem>
                    </GridLayoutRow>
                </GridLayout>
                <FormLayoutItem>
                    <Field
                        previewMode={isPreviewMode}
                        component={Textarea}
                        name="description"
                        label="Описание"
                        required
                        validate={{
                            required: true,
                            length: {
                                max: 250
                            }
                        }}
                        placeholder="Описание"
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        previewMode={isPreviewMode}
                        component={Dropdown}
                        name="position"
                        items={positionDropDownItems}
                        label="должность"
                        required
                        disabled
                        value={positionDropDownValue}
                        validate={{
                            required: true
                        }}
                        placeholder="должность"
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        previewMode={isPreviewMode}
                        component={Textbox}
                        name="yClientsUrl"
                        label="yClients"
                        placeholder="yClients url"
                        required
                        validate={{
                            required: true
                        }}
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        previewMode={isPreviewMode}
                        component={Textbox}
                        name="instagramUrl"
                        label="Instagram"
                        placeholder="Instagram url"
                    />
                </FormLayoutItem>
                <FormLayoutItem>
                    <Field
                        previewMode={isPreviewMode}
                        component={Textbox}
                        name="facebookUrl"
                        label="Facebook"
                        placeholder="Facebook url"
                    />
                </FormLayoutItem>
            </FormLayoutItemGroup>
        </FormLayout>
    );
};

StaffModalFormLayout.defaultProps = {
    mediaId: [],
    isPreviewMode: false
};

export {StaffModalFormLayout};
