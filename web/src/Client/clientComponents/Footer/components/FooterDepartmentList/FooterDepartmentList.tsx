import React, {useContext} from 'react';
import {AppContext} from '../../../../App/store';
import {getUniqueKey} from '../../../../../utils';
import {FooterDepartmentListItem} from './FooterDepartmentListItem';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const FooterDepartmentList = (
    {
        isContactPage,
        className
    }
) => {
    const {departments} = useContext(AppContext);
    const componentClassName = ClassNames(
        classes.footerDepartmentList,
        className
    );

    return (
        <div className={componentClassName}>
            {
                departments.map(item => {
                    return (
                        <FooterDepartmentListItem
                            item={item}
                            key={getUniqueKey()}
                            isContactPage={isContactPage}
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
