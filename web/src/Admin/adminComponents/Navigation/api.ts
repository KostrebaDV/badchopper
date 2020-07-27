import {GET, POST} from '../../../utils/api';
import {ROUTE, ENDPOINTS} from './const';

export const getNavigationList = () => {
    return GET(ROUTE.GET_NAVIGATION_LIST);
};

export const logout = () => POST(ENDPOINTS.LOGOUT, {});
