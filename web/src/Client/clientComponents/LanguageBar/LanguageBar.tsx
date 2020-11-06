import React, {useContext, useCallback, FC} from 'react';
import classes from './styles/index.module.scss';
import Cookies from 'js-cookie';
import ClassNames from 'classnames';
import {AppContext} from '../../App/store';

type LanguageBarProps = {
    openNavigation?: (isOpen: boolean) => void;
    className?: string;
}

const LanguageBar: FC<LanguageBarProps> = (
    {
        openNavigation,
        className
    }
) => {
    const {languageCode, setLanguageCode} = useContext(AppContext);

    const componentClassName = ClassNames(
        classes.languageBar,
        className
    );

    const ruClassName = ClassNames(
        {
            [classes.languageBar__item_active]: languageCode === 'ru'
        },
        classes.languageBar__item
    );

    const enClassName = ClassNames(
        {
            [classes.languageBar__item_active]: languageCode === 'en'
        },
        classes.languageBar__item
    );

    const uaClassName = ClassNames(
        {
            [classes.languageBar__item_active]: languageCode === 'ua'
        },
        classes.languageBar__item
    );

    const onLanguageCodeClick = useCallback((code) => {
        if (languageCode !== code) {
            Cookies.set('language', code)
            setLanguageCode(code);
            if (typeof openNavigation !== 'undefined') {
                openNavigation(false);
            }
        }
    }, [
        setLanguageCode,
        languageCode,
        openNavigation
    ]);

    return (
        <div className={componentClassName}>
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

export {LanguageBar};
