import React, {FC} from 'react';
import {PaddingBox} from '../../../../baseComponents/PaddingBox/PaddingBox';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {DepartmentAddFormMediaType} from './types';
import {Field} from '../../../../baseComponents/Form';
import {MediaSelector} from '../../../../baseComponents/Form/Adapters';
import {FormLayoutItem} from '../../../../baseComponents/FormLayout';

const DepartmentAddFormMedia: FC<DepartmentAddFormMediaType> = (
    {
        mediaModalData,
        isDepartmentDetail,
        values,
        editMode
    }
) => {
    return (
        <>
            <PaddingBox hrSmall>
                <Typography bold='600' variant='18'>
                    Медиа
                </Typography>
            </PaddingBox>
            <PaddingBox hrSmall tSmall bTiny>
                <Typography variant='16'>
                    Фото филиала
                </Typography>
            </PaddingBox>
            <PaddingBox hrSmall>
                <FormLayoutItem>
                    <Field
                        component={MediaSelector}
                        mediaModalData={mediaModalData}
                        name="imageId"
                        required
                        previewMode={!editMode}
                        value={values && values.mediaId}
                        singleSelect
                        validate={{
                            required: true
                        }}
                    />
                </FormLayoutItem>
            </PaddingBox>
            <PaddingBox hrSmall tSmall bTiny>
                <Typography variant='16'>
                    Фото филиала на главной странице
                </Typography>
            </PaddingBox>
            <PaddingBox hrSmall>
                <FormLayoutItem>
                    <Field
                        component={MediaSelector}
                        mediaModalData={mediaModalData}
                        name="effectImageId"
                        required
                        previewMode={!editMode}
                        value={values && values.effectImageId}
                        singleSelect
                        validate={{
                            required: true
                        }}
                    />
                </FormLayoutItem>
            </PaddingBox>
        </>
    );
};

DepartmentAddFormMedia.defaultProps = {
    values: {},
    mediaModalData: [],
    isDepartmentDetail: false,
    editMode: false,
};

export {DepartmentAddFormMedia};
