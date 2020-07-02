import React, {useMemo} from 'react';
import {Typography} from '../../../../../Admin/baseComponents/Typography/Typography';
import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

const DetailPageStaffSwitcherItem = (
    {
        label,
        count,
        active,
        setActiveStaff
    }
) => {
    const componentClassName = ClassNames(
        classes.detailPageStaffSwitcherItem,
        {
            [classes.detailPageStaffSwitcherItem_active]: active
        }
    );

    const formattedCount = useMemo(() => {
        const isNumeral = count.toString().length === 1;

        return isNumeral ? `0${count}` : count;
    }, [count]);

    return (
        <div onClick={setActiveStaff}>
            <Typography
                displayBlock
                className={componentClassName}
                variant='54'
                lineHeight='1'
            >
                {label}
            </Typography>
            <Typography
                displayBlock
                variant="18"
            >
                {formattedCount}
            </Typography>
        </div>
    );
};

DetailPageStaffSwitcherItem.defaultProps = {
    active: false
};

export {DetailPageStaffSwitcherItem};
