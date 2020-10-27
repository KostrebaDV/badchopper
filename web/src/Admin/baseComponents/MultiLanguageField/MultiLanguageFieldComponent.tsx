import React from 'react';
import {Field} from '../Form';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import './styles/utilStyles.scss'

const MultiLanguageFieldComponent = (
    {
        previewMode,
        name,
        code,
        adapter,
        required
    }
) => {
    const componentClassName = ClassNames(
        classes.multiLanguageFieldComponent,
        `multiLanguageFieldComponent_${name}`
    );

    return (
        <div
            data-languagecodefield={`${code}-${name}`}
            className={componentClassName}
        >
            <Field
                component={adapter}
                name={`${name}${code}`}
                required={required}
                previewMode={previewMode}
                validate={{
                    required: true
                }}
            />
        </div>
    );
};

export {MultiLanguageFieldComponent};
