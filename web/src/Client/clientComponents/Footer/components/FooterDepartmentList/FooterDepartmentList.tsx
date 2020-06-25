import React, {useContext} from 'react';
import {AppContext} from '../../../../App/store';
import {getUniqueKey} from '../../../../../utils';
import {FooterDepartmentListItem} from './FooterDepartmentListItem';
import classes from './styles/index.module.scss';

const FooterDepartmentList = () => {
    const {departments} = useContext(AppContext);

    return (
        <div className={classes.footerDepartmentList}>
            {
                departments.map(item => {
                    return (
                        <FooterDepartmentListItem
                            item={item}
                            key={getUniqueKey()}
                        />
                    );
                })
            }
        </div>
    );
};

export {FooterDepartmentList};
