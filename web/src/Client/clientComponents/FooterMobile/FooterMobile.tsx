import React, {useState} from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {FooterMobileDepartmentList} from './components/FooterMobileDepartmentList/FooterMobileDepartmentList';
import {FooterMobileContactUs} from './components/FooterMobileContactUs/FooterMobileContactUs';
import {FooterContactUsForm} from '../Footer/components/FooterContactUsForm/FooterContactUsForm';
import {NavigationMenuContentWrapperMobile} from '../NavigationMenuContentWrapperMobile/NavigationMenuContentWrapperMobile';

const FooterMobile = () => {
    const date = new Date();
    const [isOpen, setIsOpen] = useState(false);

    const handleContactUsFormOpen = (e) => {
        e.stopPropagation();

        setIsOpen(true);
    };

    const handleContactUsFormClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className={classes.footerMobile}>
                <Logo footerLogo/>
                <div className={classes.footerMobile__departmentList}>
                    <FooterMobileDepartmentList/>
                </div>
                <FooterMobileContactUs
                    handleContactUsFormOpen={handleContactUsFormOpen}
                />
                <div className={classes.footerMobile__copyright}>
                    {date.getFullYear()}. Bad Chopper
                </div>
                <NavigationMenuContentWrapperMobile
                    isOpen={isOpen}
                    zIndex
                    render={() => {
                        return (
                            <FooterContactUsForm
                                onClose={handleContactUsFormClose}
                            />
                        );
                    }}
                />
            </div>
        </>
    );
};

export {FooterMobile};
