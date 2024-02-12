import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {MultiLanguageLanguageCodeLabel} from './MultiLanguageLanguageCodeLabel';
import {MultiLanguageFieldComponent} from './MultiLanguageFieldComponent';
import {setActiveTranslationCode} from './utils';

const MultiLanguageField = (
    {
        name,
        label,
        previewMode,
        adapter,
        required,
        languages
    }
) => {
    useEffect(() => {
        //wait until DOM be ready
        const timeOut = setTimeout(() => {
            setActiveTranslationCode(`${languages[0]}-${name}`, name);
        }, 10);

        return () => {
            clearTimeout(timeOut);
        };
        // eslint-disable-next-line
    }, [previewMode])

    const multiLanguageCodeWrapper = ClassNames(
        classes.multiLanguageField__codeWrapper
    );

    return (
        <div
            className={classes.multiLanguageField}
        >
            <div className={classes.multiLanguageField__label}>
                <div>
                    {label}&nbsp;
                    {required && <span className={classes.multiLanguageField__labelRequired}>*</span>}
                </div>
                <div className={multiLanguageCodeWrapper}>
                {
                    languages.map((code, index) => {
                        const key = `${name}${index}`;

                        return (
                            <MultiLanguageLanguageCodeLabel
                                key={key}
                                code={code}
                                name={name}
                                setActiveTranslationCode={code => setActiveTranslationCode(code, name)}
                            />
                        );
                    })
                }
                </div>
            </div>
            {
                languages.map((code, index) => {
                    const key = `${name}${index}`;

                    return (
                        <MultiLanguageFieldComponent
                            key={key}
                            name={name}
                            code={code}
                            required={required}
                            adapter={adapter}
                            previewMode={previewMode}
                        />
                    );
                })
            }
        </div>
    );
};

MultiLanguageField.defaultProps = {
    name: '',
    value: '',
    placeholder: '',
    previewMode: false,
    required: false,
    languages: []
};

MultiLanguageField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    languages: PropTypes.array,
    previewMode: PropTypes.bool,
    required: PropTypes.bool,
};

export {MultiLanguageField};
