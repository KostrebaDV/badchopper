import React from 'react';
import {AssistanceContextProvider} from './store';
import {AssistanceModalsProvider} from './components/AssistanceModalsProvider/AssistanceModalsProvider';
import {AssistanceHeader} from './components/AssistanceHeader/AssistanceHeader';
import {AssistanceList} from './components/AssistanceList/AssistanceList';

const Assistance = () => {
    return (
        <AssistanceContextProvider>
            <AssistanceModalsProvider>
                <AssistanceHeader/>
                <AssistanceList/>
            </AssistanceModalsProvider>
        </AssistanceContextProvider>
    );
};

export {Assistance};
