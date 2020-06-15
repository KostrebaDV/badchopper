import React from 'react';
import {StaffListHeader} from '../StaffListHeader/StaffListHeader';
import {StaffList} from '../StaffList/StaffList';

const StaffBarbers = () => {
    return (
        <>
            <StaffListHeader
                headerLabel="!!!Мастера"
                isBarberLayout
            />
            <StaffList isBarberLayout/>
        </>
    );
};

export {StaffBarbers};
