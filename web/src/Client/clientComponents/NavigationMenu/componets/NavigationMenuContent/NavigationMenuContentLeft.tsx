import React, {useContext} from 'react';
import classes from './styles/index.module.scss';
import {Typography} from "../../../../../Admin/baseComponents/Typography/Typography";
import {NavigationMenuForm} from "../NavigationMenuForm/NavigationMenuForm";
import {FormContext} from '../../../../../store/FormContext';
import {Button} from '../../../Button/Button';
import {addFeedback} from '../../api';

const NavigationMenuContentLeft = () => {
    const {forms} = useContext(FormContext);

    const handleAddFeedback = values => {
        addFeedback(values)
            .then(({data}) => console.log(data));
    };

    return (
        <div className={classes.navigationMenuContentLeft}>
            <div className={classes.navigationMenuContentLeft__content}>
                <Typography
                    variant="32"
                    bold="600"
                    className={classes.navigationMenuContentLeft__header}
                >
                    !!Оставить отзыв
                </Typography>
                <NavigationMenuForm handleAddFeedback={handleAddFeedback}/>
                <Button
                    label="!отправить"
                    onClick={() => forms.ADD_FEEDBACK_FORM.submitForm()}
                    labelUppercase
                    className={classes.navigationMenuContentLeft__button}
                />
            </div>
        </div>
    );
};

export {NavigationMenuContentLeft};
