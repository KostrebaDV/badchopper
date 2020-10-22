import {useContext} from 'react';
import {AppContext} from '../../App/store';
import { useLocation } from 'react-router-dom';
import {parseUrl} from '../../../utils';

export const useGetDepartment = () => {
    const {departments} = useContext(AppContext);
    const location = useLocation();
    const {id} = parseUrl(location.pathname);

    const department = departments.find(item => item.publicId === id);

    if (typeof department !== 'undefined') {
        return department;
    }

    return {
        address: {
            street: {
                ua: '',
                ru: '',
                en: ''
            },
            number: '',
        },
        description: {
            ua: '',
            ru: '',
            en: ''
        },
        phone: '',
        image: {
            path: '',
        },
        departmentYClients: '',
        staff: []
    };
};
