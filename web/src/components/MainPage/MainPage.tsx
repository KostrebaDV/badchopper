import React from 'react';

import { POST } from "../../utils/api";

export const MainPage = () => {
    const testCall = () => {
        return POST('departments/addDepartment', { id: 2, name: 'test'})
            .then(data => console.log(data))
    };

    return (
        <div onClick={testCall}>call</div>
    );
};
