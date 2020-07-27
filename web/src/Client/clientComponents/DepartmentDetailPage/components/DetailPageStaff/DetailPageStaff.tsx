import React, {useMemo} from 'react';
import classes from './styles/index.module.scss';
import {DetailPageStaffList} from './DetailPageStaffList';
import ClassNames from 'classnames';

const DetailPageStaff = (
    {
        staff
    }
) => {
    const barbers = useMemo(() => {
        return staff.filter(item => item.position === 1);
    }, [staff]);

    const componentClassName = ClassNames(
        classes.detailPageStaff
    );

    return (
        <div className={componentClassName}>
            <DetailPageStaffList
                staff={barbers}
            />
        </div>
    );
};

export {DetailPageStaff};
