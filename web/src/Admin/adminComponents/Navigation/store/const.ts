import { createContext } from 'react';
import {NavigationContextType} from './types';

export const initialState = {
    navigationList: [],
    setNavigationList: () => {}
};
export const NavigationContext = createContext<NavigationContextType>(initialState);
export const INIT_NAVIGATION = 'INIT_NAVIGATION';
