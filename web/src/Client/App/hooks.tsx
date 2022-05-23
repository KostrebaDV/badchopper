import {useEffect, useContext} from 'react';

import {AppContext} from './store';
import {getAllDepartments} from './api';
import {isUndefined} from '../../utils';
import Cookies from 'js-cookie';

export const useGetDepartmentData = () => {
    const {setDepartments} = useContext(AppContext);
    const allowCookie = Cookies.get('allowCookie');

    if (isUndefined(allowCookie)) {
        Cookies.set('allowCookie', 'false');
    }

    if (isUndefined(allowCookie)) {
        Cookies.set('allowCookie', 'false');
    }

    useEffect(() => {
        getAllDepartments()
            .then(({data}) => {
                setDepartments(data);
            });
        // eslint-disable-next-line
    }, []);
};

export const useSetLanguage = () => {
    const {setLanguageCode} = useContext(AppContext);

    useEffect(() => {
        const languageCode = Cookies.get('language');
        const allowCookie = Cookies.get('allowCookie');

        if (!isUndefined(languageCode) && allowCookie === 'true') {
            setLanguageCode(languageCode);
        } else {
            setLanguageCode('ua');
            Cookies.set('language', 'ua');
        }
        // eslint-disable-next-line
    }, [])
};
