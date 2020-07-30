import React from 'react';
import {FormLayoutItem, FormLayoutItemGroup} from '../../../../baseComponents/FormLayout';
import {GridLayout} from '../../../../baseComponents/GridLayout/GridLayout';
import {GridLayoutRow} from '../../../../baseComponents/GridLayout';
import {Field} from '../../../../baseComponents/Form';
import { MediaSelector, Textarea, Textbox} from '../../../../baseComponents/Form/Adapters';
import FormLayout from '../../../../baseComponents/FormLayout';

const CommentFormLayout = (
    {
        mediaId,
        isPreviewMode,
        mediaModalData,
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
                                    label="!Имя"
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
                                    name="instagramUrl"
                                    label="Instagram"
                                    placeholder="Instagram url"
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
                        label="Отзыв"
                        required
                        validate={{
                            required: true,
                            length: {
                                max: 1000
                            }
                        }}
                        placeholder="Описание"
                    />
                </FormLayoutItem>
            </FormLayoutItemGroup>
        </FormLayout>
    );
};

CommentFormLayout.defaultProps = {
    mediaId: [],
    isPreviewMode: false
};

export {CommentFormLayout};
