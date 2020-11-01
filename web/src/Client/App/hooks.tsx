import {useEffect, useContext, useCallback, useState, useRef} from 'react';
import {ROUTES} from './routes';
import {useHistory} from "react-router-dom";
import {AppContext} from './store';
import {getAllDepartments, getSyncHash, getTranslations} from './api';
import {isNull, isUndefined} from '../../utils';
import {initEffect} from './imageEffector/imageEffectLoader';
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

                // @ts-ignore
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
        getTranslations()
            .then(({data}) => {
                localStorage.setItem('translations', JSON.stringify(data));
            })
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
