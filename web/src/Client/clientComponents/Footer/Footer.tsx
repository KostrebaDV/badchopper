import React, {useState} from 'react';
import classes from './styles/index.module.scss';
import {Logo} from '../Logo/Logo';
import {FooterDepartmentList} from './components/FooterDepartmentList/FooterDepartmentList';
import {FooterContactUs} from './components/FooterContactUs/FooterContactUs';
import {FooterContactUsForm} from './components/FooterContactUsForm/FooterContactUsForm';
import {NavigationMenuContentWrapper} from '../NavigationMenuContentWrapper/NavigationMenuContentWrapper';
import {BasePageLayout} from '../BasePageLayout/BasePageLayout';
import {BasePageLayoutLeft} from '../BasePageLayout/BasePageLayoutLeft';
import {BasePageLayoutRight} from '../BasePageLayout/BasePageLayoutRight';

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
            <BasePageLayout className={classes.footer__top}>
                <BasePageLayoutLeft>
                    <Logo footerLogo/>
                </BasePageLayoutLeft>
                <BasePageLayoutRight>
                    <FooterDepartmentList/>
                </BasePageLayoutRight>
            </BasePageLayout>
            <BasePageLayout className={classes.footer__bottom}>
                <BasePageLayoutLeft className={classes.footer__copyright}>
                    {date.getFullYear()}. Bad Chopper
                </BasePageLayoutLeft>
                <BasePageLayoutRight>
                    <FooterContactUs
                        handleContactUsFormOpen={handleContactUsFormOpen}
                    />
                </BasePageLayoutRight>
            </BasePageLayout>
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
