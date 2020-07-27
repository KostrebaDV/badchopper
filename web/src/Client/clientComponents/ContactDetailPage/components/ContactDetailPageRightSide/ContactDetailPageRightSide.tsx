import React, {useContext} from 'react';
import {ContactForm} from '../ContactForm/ContactForm';
import {Button} from '../../../Button/Button';
import {FormContext} from '../../../../../store/FormContext';
import {addFeedback} from '../../api';
import classes from './styles/index.module.scss';
import {FooterDepartmentList} from '../../../Footer/components/FooterDepartmentList/FooterDepartmentList';

const ContactDetailPageRightSide = () => {
    const {forms} = useContext(FormContext);

    const handleAddFeedback = values => {
        addFeedback(values)
            .then(({data}) => console.log(data));
    };

    return (
        <div className={classes.contactDetailPageRightSide}>
            <div className={classes.contactDetailPageRightSide__form}>
                <ContactForm handleAddFeedback={handleAddFeedback}/>
                <Button
                    label="!отправить"
                    onClick={() => forms.ADD_FEEDBACK_FORM.submitForm()}
                    labelUppercase
                    className={classes.navigationMenuContentLeft__button}
                />
            </div>
            <FooterDepartmentList
                isContactPage
                className={classes.navigationMenuContentLeft__footerDepartmentList}
            />
        </div>
    );
};

export {ContactDetailPageRightSide};
