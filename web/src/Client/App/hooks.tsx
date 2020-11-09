import {useEffect, useContext, useCallback} from 'react';

import {AppContext} from './store';
import {getAllDepartments} from './api';
import {isUndefined} from '../../utils';
import Cookies from 'js-cookie';

export const useGetDepartmentData = () => {
    const {setDepartments} = useContext(AppContext);

    useEffect(() => {
        getAllDepartments()
            .then(({data}) => {
                setDepartments(data)
            });
        // eslint-disable-next-line
    }, []);
};

export const useSetLanguage = (setLanguageCode) => {
    const setLanguageCodeCB = useCallback((languageCode) => {
        setLanguageCode(languageCode);
    }, [setLanguageCode])

    useEffect(() => {
        const languageCode = Cookies.get('language');

        if (!isUndefined(languageCode)) {
            setLanguageCodeCB(languageCode);

            return;
        }

        Cookies.set('language', 'ua')
        // eslint-disable-next-line
    }, [])
};
