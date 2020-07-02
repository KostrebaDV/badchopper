import React from 'react';
import {useCanvas} from '../../App/hooks';
import {Header} from '../Header/Header';
import {useGetDepartment} from './hooks';
import {Image} from '../../../Admin/baseComponents/Image/Image';
import classes from './styles/index.module.scss';
import {DetailPageStaff} from './components/DetailPageStaff/DetailPageStaff';

const DepartmentDetailPage = () => {
    useCanvas();

    const {
        name,
        image,
        staff,
        description
    } = useGetDepartment();

    return (
        <>
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
        </>
    );
};

export {DepartmentDetailPage};
