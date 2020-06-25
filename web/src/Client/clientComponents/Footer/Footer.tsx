import React from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {FooterDepartmentList} from './components/FooterDepartmentList/FooterDepartmentList';
import {FooterContactUs} from './components/FooterContactUs/FooterContactUs';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Logo footerLogo/>
            <FooterDepartmentList/>
            <FooterContactUs/>
        </div>
    );
};

export {Footer};
