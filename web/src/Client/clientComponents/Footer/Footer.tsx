import React, {useState} from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {FooterDepartmentList} from './components/FooterDepartmentList/FooterDepartmentList';
import {FooterContactUs} from './components/FooterContactUs/FooterContactUs';
import {FooterContactUsForm} from './components/FooterContactUsForm/FooterContactUsForm';
import {NavigationMenuContentWrapper} from '../NavigationMenuContentWrapper/NavigationMenuContentWrapper';

const Footer = () => {
    const date = new Date();

    const [isOpen, setIsOpen] = useState(false);

    const handleContactUsFormOpen = () => {
        setIsOpen(true);
    };

    const handleContactUsFormClose = () => {
        setIsOpen(false);
    };
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
                <FooterContactUs
                    handleContactUsFormOpen={handleContactUsFormOpen}
                />
            </div>
            <NavigationMenuContentWrapper
                isOpen={isOpen}
                render={() => {
                    return (
                        <FooterContactUsForm
                            onClose={handleContactUsFormClose}
                        />
                    );
                }}
            />
        </>
    );
};

export {Footer};
