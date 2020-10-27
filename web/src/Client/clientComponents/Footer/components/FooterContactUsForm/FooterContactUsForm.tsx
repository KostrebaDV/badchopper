import React, {useCallback, useContext, useMemo, useState} from 'react';
import {Logo} from '../../../Logo/Logo';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import closeIcon from '../../../../../static/images/closeIcon.svg';
import Form, {Field} from '../../../../../Admin/baseComponents/Form';
import {FormFieldGroup} from '../../../FormFieldGroup/FormFieldGroup';
import {Dropdown, Textbox} from '../../../FormAdapters';
import {EMPLOYEE_FORM, positionDropdownItems} from './consts';
import {FormContext} from '../../../../../store/FormContext';
import {isUndefined, translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {AppContext} from '../../../../App/store';
import {addMemberShipApplication} from './api';
import {FormButton} from '../../../FormButton/FormButton';

const FooterContactUsForm = (
    {
        onClose
    }
) => {
    const {languageCode} = useContext(AppContext);
    const {forms} = useContext(FormContext);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const isFormFilled = useMemo(() => {
        if (isUndefined(forms.EMPLOYEE_FORM) || isUndefined(forms.EMPLOYEE_FORM.values)) return;

        const {values} = forms.EMPLOYEE_FORM;

        return !!values['position'] && !!values['name'] && !!values['phone'];
    }, [forms.EMPLOYEE_FORM]);

    const handleSubmitForm = (values) => {


        addMemberShipApplication(values)
            .then(() => setIsSubmitted(true));
    };

    const dropdownItems = useMemo(() => {
        return positionDropdownItems[languageCode]
    }, [languageCode])

    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className={classes.footerContactUsForm}>
            <div className={classes.footerContactUsForm__header}>
                <Logo/>
                <div
                    onClick={handleClose}
                    className={classes.footerContactUsForm__closeButton}
                >
                    <Typography
                        bold="600"
                        upperCase
                        letterSpacing="1px"
                    >
                        {translate(codes.close)}&nbsp;
                    </Typography>
                    <img src={closeIcon} alt="closeIcon"/>
                </div>
            </div>
            <div className={classes.footerContactUsForm__content}>
                <div className={classes.footerContactUsForm__contentLeft}>
                    {
                        !isSubmitted && (
                            <>
                                <div className={classes.footerContactUsForm__headLabel}>
                                    {translate(codes.doYouWantToBecomePart)}
                                </div>
                                <div className={classes.footerContactUsForm__text}>
                                    {translate(codes.fillForm)}
                                </div>
                            </>
                        )
                    }
                    {
                        isSubmitted && (
                            <div className={classes.footerContactUsForm__headLabel}>
                                {translate(codes.thankYouForFeedback)}
                            </div>
                        )
                    }
                </div>
                <div className={classes.footerContactUsForm__contentRight}>
                    {
                        !isSubmitted && (
                            <>
                                <Form
                                    data={{isFormFilled}}
                                    name={EMPLOYEE_FORM}
                                    onSubmit={handleSubmitForm}
                                    resetFormValues
                                >
                                    <FormFieldGroup>
                                        <Field
                                            required
                                            items={dropdownItems}
                                            placeholder={`${translate(codes.selectPosition)} *`}
                                            name="position"
                                            component={Dropdown}
                                            validate={{required: true}}
                                        />
                                        <Field
                                            required
                                            placeholder={`${translate(codes.yourName)} *`}
                                            name="name"
                                            component={Textbox}
                                            validate={{required: true}}
                                        />
                                        <Field
                                            required
                                            placeholder={`${translate(codes.phone)} *`}
                                            name="phone"
                                            component={Textbox}
                                            validate={{required: true}}
                                        />
                                    </FormFieldGroup>
                                </Form>
                                <FormButton
                                    disable={!isFormFilled}
                                    label={translate(codes.send)}
                                    onClick={() => forms.EMPLOYEE_FORM.submitForm()}
                                    labelUppercase
                                    className={classes.footerContactUsForm__formButton}
                                />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export {FooterContactUsForm};
