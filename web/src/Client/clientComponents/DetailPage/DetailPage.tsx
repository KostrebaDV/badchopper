import React from 'react';
import {useCanvas} from '../../App/hooks';
import {NavigationMenu} from '../NavigationMenu/NavigationMenu';
import {Header} from '../Header/Header';
import {useGetDepartment} from './hooks';
import {Image} from '../../../Admin/baseComponents/Image/Image';
import classes from './styles/index.module.scss';
import {DetailPageStaff} from './components/DetailPageStaff/DetailPageStaff';
import {Footer} from '../Footer/Footer';

const DetailPage = () => {
    useCanvas();

    const {
        name,
        image,
        staff,
        description
    } = useGetDepartment();

    return (
        <>
            <NavigationMenu />
            <Header
                showButton
                label={name}
                content={description}
            />
            <Image
                width="100%"
                height={418}
                className={classes.detailPage__image}
                alt='departmentImage'
                src={image.path}
            />
            <DetailPageStaff staff={staff} />
            <Footer/>
        </>
    );
};

export {DetailPage};
