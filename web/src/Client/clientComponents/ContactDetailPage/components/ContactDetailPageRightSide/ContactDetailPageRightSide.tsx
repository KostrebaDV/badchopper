import React, {useContext} from 'react';
import {ContactForm} from '../ContactForm/ContactForm';
import {Button} from '../../../Button/Button';
import {FormContext} from '../../../../../store/FormContext';
import {addFeedback} from '../../api';
import classes from './styles/index.module.scss';
import {FooterDepartmentList} from '../../../Footer/components/FooterDepartmentList/FooterDepartmentList';
import {translate} from '../../../../../utils';
import {codes} from '../../../../../static/translations/codes';
import {BasePageLayoutRight} from '../../../BasePageLayout/BasePageLayoutRight';

const ContactDetailPageRightSide = () => {
    const {forms} = useContext(FormContext);

    const handleAddFeedback = values => {
        addFeedback(values)
            .then(({data}) => console.log(data));
    };

    return (
        <BasePageLayoutRight className={classes.contactDetailPageRightSide}>
            <div className={classes.contactDetailPageRightSide__form}>
                <ContactForm handleAddFeedback={handleAddFeedback}/>
                <Button
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
