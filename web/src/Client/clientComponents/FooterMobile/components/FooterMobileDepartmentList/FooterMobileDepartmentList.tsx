import React, {useContext} from 'react';
import {AppContext} from '../../../../App/store';
import {getUniqueKey, scrollToTop} from '../../../../../utils';
import {FooterMobileDepartmentListItem} from './FooterMobileDepartmentListItem';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import { useNavigate } from "react-router-dom";
import {ROUTES} from '../../../../App/routes';

const FooterMobileDepartmentList = (
    {
        isContactPage,
        className
    }
) => {
    const navigate = useNavigate();

    const {departments} = useContext(AppContext);
    const componentClassName = ClassNames(
        classes.footerMobileDepartmentList,
        className
    );

    const onDepartmentClick = (url: string) => {
        navigate(`${ROUTES.DEPARTMENT_DETAIL}${url}`);

        scrollToTop();
    };

    return (
        <div className={componentClassName}>
            {
                departments.map(item => {
                    return (
                        <FooterMobileDepartmentListItem
                            item={item}
                            key={getUniqueKey()}
                            isContactPage={isContactPage}
                            onDepartmentClick={onDepartmentClick}
                        />
                    );
                })
            }
        </div>
    );
};

FooterMobileDepartmentList.defaultProps = {
    isContactPage: false,
    className: '',
};

export {FooterMobileDepartmentList};
