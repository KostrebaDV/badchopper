import React from 'react';
import {useGetAssistanceData} from './hooks';
import {Header} from '../Header/Header';
import {AssistanceList} from './components/AssistanceList/AssistanceList';
import {translate} from '../../../utils';
import {codes} from '../../../static/translations/codes';

const AssistanceDetailPage = () => {
    const assistanceData = useGetAssistanceData();

    return (
        <div>
            <Header
                firstLetterUppercase
                label={translate(codes.services)}
                content={translate(codes.giftLabel)}
            />
            <AssistanceList
                assistance={assistanceData}
            />
        </div>
    );
};

export {AssistanceDetailPage};
