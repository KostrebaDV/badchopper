import React from 'react';
import {ContentHeaderLeft} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import ContentHeader from '../../../../adminComponents/ContentHeader';

const DepartmentAddHeader = () => {
    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography variant="24">
                    !!Новый филиал
                </Typography>
            </ContentHeaderLeft>
        </ContentHeader>
    );
};

export {DepartmentAddHeader};
