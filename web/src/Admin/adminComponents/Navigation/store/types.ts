import {NavigationItemType} from '../components/NavigationList/types';

export type NavigationContextType = {
    navigationList: NavigationItemType[],
    setNavigationList: ([]) => void
};
