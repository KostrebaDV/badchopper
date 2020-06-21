import {createContext} from 'react';
import {TabsContextType} from './types';

export const TabsContextDefaultValues = {
    activeTabName: '',
    setActiveTab: () => {}
};

export const TabsContext = createContext<TabsContextType>(TabsContextDefaultValues);

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
