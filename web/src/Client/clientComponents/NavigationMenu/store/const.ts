import {createContext} from 'react';
import {NavigationMenuContextType} from './types';

const NavigationMenuContextDefaultValues = {
    isOpen: false,
    openNavigation: () => {}
};

export const initialState = {isOpen: false};

export const OPEN_NAVIGATION = 'OPEN_NAVIGATION';
export const NavigationMenuContext = createContext<NavigationMenuContextType>(NavigationMenuContextDefaultValues);
