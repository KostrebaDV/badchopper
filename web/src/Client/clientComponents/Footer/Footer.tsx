import React from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {FooterDepartmentList} from './components/FooterDepartmentList/FooterDepartmentList';
import {FooterContactUs} from './components/FooterContactUs/FooterContactUs';

const Footer = () => {
    const date = new Date();

    return (
        <>
            <div className={classes.footer__top}>
                <Logo footerLogo/>
                <FooterDepartmentList/>
            </div>
            <div className={classes.footer__bottom}>
                <div className={classes.footer__copyright}>
                    {date.getFullYear()}. Bad Chopper
                </div>
                <FooterContactUs/>
            </div>
        </>

    );
};

export {Footer};
