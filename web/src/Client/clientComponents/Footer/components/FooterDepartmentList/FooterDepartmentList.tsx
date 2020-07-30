import React, {useContext} from 'react';
import {AppContext} from '../../../../App/store';
import {getUniqueKey, scrollToTop} from '../../../../../utils';
import {FooterDepartmentListItem} from './FooterDepartmentListItem';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {ROUTES} from '../../../../App/routes';
import { useHistory } from "react-router-dom";

const FooterDepartmentList = (
    {
        isContactPage,
        className
    }
) => {
    const history = useHistory();

    const {departments} = useContext(AppContext);
    const componentClassName = ClassNames(
        classes.footerDepartmentList,
        className
    );

    const onDepartmentClick = url => {
        history.push(`${ROUTES.DEPARTMENT_DETAIL}${url}`);

        scrollToTop();
    };

    return (
        <div className={componentClassName}>
            {
                departments.map(item => {
                    return (
                        <FooterDepartmentListItem
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

FooterDepartmentList.defaultProps = {
    isContactPage: false,
    className: '',
};

export {FooterDepartmentList};
