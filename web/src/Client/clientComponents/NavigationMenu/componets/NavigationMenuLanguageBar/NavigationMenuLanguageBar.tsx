import React, {useContext, useCallback} from 'react';
import classes from './styles/index.module.scss';
import Cookies from 'js-cookie';
import ClassNames from 'classnames';
import {AppContext} from '../../../../App/store';
import {NavigationMenuContext} from '../../store/const';

const NavigationMenuLanguageBar = () => {
    const {languageCode, setLanguageCode} = useContext(AppContext);
    const {openNavigation} = useContext(NavigationMenuContext);

    const ruClassName = ClassNames(
        {
            [classes.navigationMenuLanguageBar__item_active]: languageCode === 'ru'
        },
        classes.navigationMenuLanguageBar__item
    );

    const enClassName = ClassNames(
        {
            [classes.navigationMenuLanguageBar__item_active]: languageCode === 'en'
        },
        classes.navigationMenuLanguageBar__item
    );

    const uaClassName = ClassNames(
        {
            [classes.navigationMenuLanguageBar__item_active]: languageCode === 'ua'
        },
        classes.navigationMenuLanguageBar__item
    );

    const onLanguageCodeClick = useCallback((code) => {
        if (languageCode !== code) {
            Cookies.set('language', code)
            setLanguageCode(code);
            openNavigation(false);
        }
    }, [
        setLanguageCode,
        languageCode,
        openNavigation
    ]);

    return (
        <div className={classes.navigationMenuLanguageBar}>
            <div
                onClick={() => onLanguageCodeClick('en')}
                className={enClassName}
            >
                EN
            </div>
            <div
                onClick={() => onLanguageCodeClick('ru')}
                className={ruClassName}
            >
                RU
            </div>
            <div
                onClick={() => onLanguageCodeClick('ua')}
                className={uaClassName}
            >
                UA
            </div>
        </div>
    );
};

export {NavigationMenuLanguageBar};
