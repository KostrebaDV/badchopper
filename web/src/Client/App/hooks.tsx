import {useEffect, useContext, useCallback, useState, useRef} from 'react';
import {ROUTES} from './routes';
import {useHistory} from "react-router-dom";
import {AppContext} from './store';
import {getAllDepartments, getSyncHash, getTranslations} from './api';
import {isNull, isUndefined} from '../../utils';
import {initEffect} from './imageEffector/imageEffectLoader';
import Cookies from 'js-cookie';

export const useGetDepartmentData = (allowReloadData) => {
    const {setDepartments} = useContext(AppContext);
    const departmentLocalStorageData = localStorage.getItem('departmentData');

    useEffect(() => {
        if (allowReloadData === 2) {
            getAllDepartments()
                .then(({data}) => {
                    setDepartments(data)
                    localStorage.setItem('departmentData', JSON.stringify(data));
                });
        }

        if (allowReloadData === 1 && departmentLocalStorageData !== null) {
            setDepartments(JSON.parse(departmentLocalStorageData));
        }
        // eslint-disable-next-line
    }, [allowReloadData]);
};

export const useCanvas = () => {
    const {location} = useHistory();
    const canvasHTMLCollection = document.getElementById('imageEffector');
    const canvasHTMLCollectionClass = document.getElementsByClassName('imageEffectorClass');

    useEffect(() => {
        // @ts-ignore
        if (!isNull(canvasHTMLCollection)) {
            if (location.pathname === ROUTES.CLIENT_ROOT) {

                while (canvasHTMLCollectionClass.length > 0) {
                    canvasHTMLCollectionClass[0].remove();
                }

                // @ts-ignore
                canvasHTMLCollection.style.display = '';
                initEffect();
            } else {
                // @ts-ignore
                canvasHTMLCollection.style.display = 'none';
            }
        }
        // eslint-disable-next-line
    }, [location.pathname]);
};

export const useGetSyncHASH = () => {
    const [allowReloadData, setAllowReloadData] = useState(0);
    const allowReq = useRef(true);

    const localStorageHash = localStorage.getItem('localStorageHash');

    if (localStorageHash === null) {
        localStorage.setItem('localStorageHash', '000-0000-0000');
    }

    useEffect(() => {
        if (!allowReq.current) return;

        getSyncHash()
            .then(({data}) => {
                localStorage.setItem('localStorageHash', JSON.stringify(data.hash));
                allowReq.current = false;

                if (localStorageHash === null) return 1;

                const allowCode = data.hash !== localStorageHash.replace(/['"]+/g, '') ? 2 : 1;
                setAllowReloadData(allowCode);
            })
            .catch(() => {
                allowReq.current = true;
            })
    }, [localStorageHash])

    return allowReloadData;
};

export const useGetTranslations = (allowReloadData) => {
    useEffect(() => {
        const t = localStorage.getItem('translations');

        if (isNull(t) || allowReloadData === 2) {
            getTranslations()
                .then(({data}) => {
                    localStorage.setItem('translations', JSON.stringify(data));
                })
        }
    }, [allowReloadData])
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
