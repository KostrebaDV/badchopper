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
        mediaId,
        editMode
    }
) => {
    return (
       <>
           <PaddingBox hrSmall>
               <Typography bold='600' variant='18'>
                   !!Медиа
               </Typography>
           </PaddingBox>
           <PaddingBox small>
               <FormLayoutItem>
                   <Field
                       component={MediaSelector}
                       mediaModalData={mediaModalData}
                       name="imageId"
                       required
                       previewMode={!editMode}
                       value={mediaId}
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
    mediaId: [],
    mediaModalData: [],
    isDepartmentDetail: false,
    editMode: false,
}

export {DepartmentAddFormMedia};
