import React, {useContext, useMemo, useState} from 'react';
import {ContactForm} from '../ContactForm/ContactForm';
import {FormContext} from '../../../../../store/FormContext';
import {addFeedback} from '../../api';
import classes from './styles/index.module.scss';
import {FooterDepartmentList} from '../../../Footer/components/FooterDepartmentList/FooterDepartmentList';
import {isUndefined, translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {BasePageLayoutRight} from '../../../BasePageLayout/BasePageLayoutRight';
import {FormButton} from '../../../FormButton/FormButton';

const ContactDetailPageRightSide = () => {
    const {forms} = useContext(FormContext);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const isFormFilled = useMemo(() => {
        if (isUndefined(forms.ADD_FEEDBACK_FORM) || isUndefined(forms.ADD_FEEDBACK_FORM.values)) return;

        const {values} = forms.ADD_FEEDBACK_FORM;

        return !!values['name'] && !!values['email'] && !!values['feedback'];
    }, [forms.ADD_FEEDBACK_FORM]);

    const handleAddFeedback = values => {
        addFeedback(values)
            .then(() => {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 2000)
            });
    };

    return (
        <BasePageLayoutRight className={classes.contactDetailPageRightSide}>
            <div className={classes.contactDetailPageRightSide__form}>
                {
                    !isSubmitted && (
                        <>
                            <ContactForm handleAddFeedback={handleAddFeedback}/>
                            <FormButton
                                disable={!isFormFilled}
                                label={`${translate(codes.send)}`}
                                onClick={() => forms.ADD_FEEDBACK_FORM.submitForm()}
                                labelUppercase
                                className={classes.navigationMenuContentLeft__formButton}
                            />
                        </>
                    )
                }
                {
                    isSubmitted && (
                        <div className={classes.contactDetailPageRightSide__submitSuccess}>
                            {translate(codes.thankYouForFeedback)}
                        </div>
                    )
                }
            </div>
            <FooterDepartmentList
                isContactPage
            />
        </BasePageLayoutRight>
    );
};

export {ContactDetailPageRightSide};
