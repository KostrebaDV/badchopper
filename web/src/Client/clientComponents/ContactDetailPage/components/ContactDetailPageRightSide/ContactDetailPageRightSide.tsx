import React, {useContext, useMemo} from 'react';
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


    const isFormFilled = useMemo(() => {
        if (isUndefined(forms.ADD_FEEDBACK_FORM) || isUndefined(forms.ADD_FEEDBACK_FORM.values)) return;

        const {values} = forms.ADD_FEEDBACK_FORM;

        return !!values['name'] && !!values['email'] && !!values['feedback'];
    }, [forms.ADD_FEEDBACK_FORM]);

    const handleAddFeedback = values => {
        addFeedback(values)
            .then(({data}) => console.log(data));
    };

    return (
        <BasePageLayoutRight className={classes.contactDetailPageRightSide}>
            <div className={classes.contactDetailPageRightSide__form}>
                <ContactForm handleAddFeedback={handleAddFeedback}/>
                <FormButton
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
    );
};

export {ContactDetailPageRightSide};
