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
import {ContactDetailPageFeedbackSuccessModal} from '../ContactDetailPageFeedbackSuccessModal/ContactDetailPageFeedbackSuccessModal';

const ContactDetailPageRightSide = () => {
    const {forms} = useContext(FormContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const isFormFilled = useMemo(() => {
        if (isUndefined(forms.ADD_FEEDBACK_FORM) || isUndefined(forms.ADD_FEEDBACK_FORM.values)) return;

        const {values} = forms.ADD_FEEDBACK_FORM;

        return !!values['name'] && !!values['email'] && !!values['feedback'];
    }, [forms.ADD_FEEDBACK_FORM]);

    const handleAddFeedback = values => {
        //Pending ob button
        setIsPending(true);
        addFeedback(values)
            .then(() => {
                setIsModalOpen(true);
                setIsPending(false);
            });
    };

    return (
        <>
            <BasePageLayoutRight className={classes.contactDetailPageRightSide}>
                <div className={classes.contactDetailPageRightSide__form}>
                    <ContactForm handleAddFeedback={handleAddFeedback}/>
                    <FormButton
                        pending={isPending}
                        disable={!isFormFilled}
                        label={`${translate(codes.send)}`}
                        onClick={() => forms.ADD_FEEDBACK_FORM.submitForm()}
                        labelUppercase
                        className={classes.navigationMenuContentLeft__formButton}
                    />
                </div>
                <FooterDepartmentList
                    isContactPage
                />
            </BasePageLayoutRight>
            <ContactDetailPageFeedbackSuccessModal
                isOpen={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export {ContactDetailPageRightSide};
