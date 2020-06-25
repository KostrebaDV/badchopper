import React from 'react';
import classes from './styles/index.module.scss';
import {DetailPageStaffSwitcherItem} from './DetailPageStaffSwitcherItem';
import ClassNames from 'classnames';

const DetailPageStaffSwitcher = (
    {
        managersCount,
        barbersCount,
        setActiveStaff,
        activeStaff
    }
) => {
    const componentClassName = ClassNames(
        classes.detailPageStaffSwitcher
    );

    return (
        <div className={componentClassName}>
            <DetailPageStaffSwitcherItem
                label='!Мастера'
                count={barbersCount}
                active={activeStaff === 1}
                setActiveStaff={() => setActiveStaff(1)}
            />
            <div className={classes.detailPageStaffSwitcher__separator}></div>
            <DetailPageStaffSwitcherItem
                label='!Администраторы'
                count={managersCount}
                active={activeStaff === 2}
                setActiveStaff={() => setActiveStaff(2)}
            />
        </div>
    );
};

export {DetailPageStaffSwitcher};
