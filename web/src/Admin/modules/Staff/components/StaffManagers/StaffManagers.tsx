import React from 'react';
import {StaffListHeader} from '../StaffListHeader/StaffListHeader';
import {StaffList} from '../StaffList/StaffList';

const StaffManagers = () => {
    return (
        <>
            <StaffListHeader
                headerLabel="!!Менеджеры"
                isBarberLayout={false}
            />
            <StaffList isBarberLayout={false} />
        </>
    );
};

export {StaffManagers};
