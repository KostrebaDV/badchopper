import React, {useContext, useMemo} from 'react';
import {Logo} from '../../../Logo/Logo';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import closeIcon from '../../../../../static/images/closeIcon.svg';
import Form, {Field} from '../../../../../Admin/baseComponents/Form';
import {FormFieldGroup} from '../../../FormFieldGroup/FormFieldGroup';
import {Dropdown, Textbox} from '../../../FormAdapters';
import {EMPLOYEE_FORM, positionDropdownItems} from './consts';
import {Button} from '../../../Button/Button';
import {FormContext} from '../../../../../store/FormContext';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {AppContext} from '../../../../App/store';

const FooterContactUsForm = (
    {
        onClose
    }
) => {
    const {languageCode} = useContext(AppContext);
    const {forms} = useContext(FormContext);

    const handleSubmitForm = values => {
        console.log(values);
    };

    const dropdownItems = useMemo(() => {
        return positionDropdownItems[languageCode]
    }, [languageCode])

    return (
        <div className={classes.footerContactUsForm}>
            <div className={classes.footerContactUsForm__header}>
                <Logo/>
                <div
                    onClick={onClose}
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
                    <div className={classes.footerContactUsForm__headLabel}>
                        {translate(codes.doYouWantToBecomePart)}
                    </div>
                    <div className={classes.footerContactUsForm__text}>
                        {translate(codes.fillForm)}
                    </div>
                </div>
                <div className={classes.footerContactUsForm__contentRight}>
                    <Form
                        name={EMPLOYEE_FORM}
                        onSubmit={handleSubmitForm}
                        restFormValues
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
                    <Button
                        label={translate(codes.send)}
                        onClick={() => forms.EMPLOYEE_FORM.submitForm()}
                        labelUppercase
                        className={classes.footerContactUsForm__formButton}
                    />
                </div>
            </div>
        </div>
    );
};

export {FooterContactUsForm};
