import React, {useMemo, useState} from 'react';
import classes from './styles/index.module.scss';
import {DetailPageStaffSwitcher} from './DetailPageStaffSwitcher';
import {DetailPageStaffList} from './DetailPageStaffList';
import ClassNames from 'classnames';

const DetailPageStaff = (
    {
        staff
    }
) => {
    const [activeStaff, setActiveStaff] = useState(1);

    const managers = useMemo(() => {
        return staff.filter(item => item.position === 2);
    }, [staff]);

    const barbers = useMemo(() => {
        return staff.filter(item => item.position === 1);
    }, [staff]);

    // const getActiveStaff = useMemo(() => {
    //     return activeStaff === 1 ? barbers : managers;
    // }, [managers, barbers, activeStaff]);

    const componentClassName = ClassNames(
        classes.detailPageStaff
    );

    return (
        <div className={componentClassName}>
            <DetailPageStaffSwitcher
                activeStaff={activeStaff}
                setActiveStaff={setActiveStaff}
                barbersCount={barbers.length}
                managersCount={managers.length}
            />
            <DetailPageStaffList
                staff={managers}
                active={activeStaff === 2}
            />
            <DetailPageStaffList
                staff={barbers}
                active={activeStaff === 1}
            />
        </div>
    );
};

export {DetailPageStaff};
