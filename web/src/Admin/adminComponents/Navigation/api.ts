import {GET} from '../../../utils/api';
import {ROUTE} from './consts';

export const getNavigationList = () => {
    return GET(ROUTE.GET_NAVIGATION_LIST)
};
