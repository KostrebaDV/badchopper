import React from 'react';
import {useGetAssistanceData} from './hooks';
import {Header} from '../Header/Header';
import {AssistanceList} from './components/AssistanceList/AssistanceList';

const AssistanceDetailPage = () => {
    const assistanceData = useGetAssistanceData();

    return (
        <div>
            <Header
                label="!!Услуги"
                content="!! Каждая услуга может быть приобретена в нашем Barbershop в виде Подарочного сертификата"
            />
            <AssistanceList
                assistance={assistanceData}
            />
        </div>
    );
};

export {AssistanceDetailPage};
