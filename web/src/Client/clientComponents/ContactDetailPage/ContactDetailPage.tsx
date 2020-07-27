import React from 'react';
import {ContactDetailPageLeftSide} from './components/ContactDetailPageLeftSide/ContactDetailPageLeftSide';
import {ContactDetailPageRightSide} from './components/ContactDetailPageRightSide/ContactDetailPageRightSide';
import classes from './styles/index.module.scss';

const ContactDetailPage = () => {
    return (
        <div className={classes.contactDetailPage}>
           <ContactDetailPageLeftSide/>
           <ContactDetailPageRightSide/>
        </div>
    );
};

export {ContactDetailPage};
