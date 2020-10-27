import {POST} from '../../../../../utils/api';
import {EMPLOYEE_FORM_URL} from './consts';

export const addMemberShipApplication = (data) => {
    return POST(EMPLOYEE_FORM_URL, data);
};
