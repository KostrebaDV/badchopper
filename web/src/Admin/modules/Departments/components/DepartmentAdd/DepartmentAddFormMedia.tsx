import React, {FC, useEffect, useMemo, useState} from 'react';
import {PaddingBox} from '../../../../baseComponents/PaddingBox/PaddingBox';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {getAllImages} from '../../../Media/api';
import {MediaImagesType} from '../../../Media/store/types';
import {DepartmentAddMedia} from './DepartmentAddMedia';
import {DepartmentAddFormMediaType} from './types';

const DepartmentAddFormMedia: FC<DepartmentAddFormMediaType> = (
    {
        selectedMediaId,
        handleSelectMedia,
        handleDeleteProcessedImage,
        hasSelectedMedia,
        showDeleteButton
    }
) => {
    const [mediaData, setMediaData] = useState<MediaImagesType>([]);

    useEffect(() => {
        if (typeof getAllImages === 'undefined') return;

        getAllImages()
            .then(({data}) => setMediaData(data))
    }, []);

    const selectedMedia = useMemo(() => {
        return mediaData.find(item => item._id === selectedMediaId)
    }, [selectedMediaId, mediaData]);

    return (
       <>
           <PaddingBox hrSmall>
               <Typography bold='600' variant='18'>
                   !!Медиа
               </Typography>
           </PaddingBox>
           <PaddingBox small>
               <DepartmentAddMedia
                   singleSelect
                   mediaData={mediaData}
                   showDeleteButton={showDeleteButton}
                   hasSelectedMedia={hasSelectedMedia}
                   selectedMedia={[selectedMedia]}
                   handleSelectMedia={handleSelectMedia}
                   handleDeleteProcessedImage={handleDeleteProcessedImage}
               />
           </PaddingBox>
       </>
    );
};

export {DepartmentAddFormMedia};
