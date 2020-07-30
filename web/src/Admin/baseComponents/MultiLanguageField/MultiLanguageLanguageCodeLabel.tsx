import React from 'react';
import {getUniqueKey} from '../../../utils';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import './styles/utilStyles.scss'

const MultiLanguageLanguageCodeLabel = (
    {
        code,
        name,
        setActiveTranslationCode
    }
) => {
    const translationCodeLabelClassName = ClassNames(
        classes.multiLanguageLanguageCodeLabel__codeLabel,
        `languageCodeLabel_${name}`
    );

   return (
       <div
           data-languagecode={`${code}-${name}`}
           onClick={() => setActiveTranslationCode(`${code}-${name}`)}
           className={translationCodeLabelClassName}
           key={getUniqueKey()}
       >
           {code}
       </div>
   )
};

export {MultiLanguageLanguageCodeLabel};
