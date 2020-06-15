import React from 'react';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import classes from './styles/index.module.scss';
import {isNullOrUndefined} from '../../../../../utils';
import {HOST} from '../../../../../contst';

const DepartmentsDetailHeader = (
    {
        departmentData
    }
) => {
    return (
        <>
            {
                isNullOrUndefined(departmentData.image) && (
                    <div
                        className={classes.departmentsDetailHeader}
                    >
                        <Typography
                            light
                            variant="28"
                            className={classes.departmentsDetailHeader__label}
                        >
                            !!Error
                        </Typography>
                    </div>
                )
            }
            {
                !isNullOrUndefined(departmentData.image) && (
                    <div
                        className={classes.departmentsDetailHeader}
                        style={{
                            backgroundImage: `url(${HOST}${departmentData.image.path})`
                        }}
                    >
                        <Typography
                            light
                            variant="28"
                            className={classes.departmentsDetailHeader__label}
                        >
                            {departmentData?.name}
                        </Typography>
                    </div>
                )
            }
        </>
    );
};

export {DepartmentsDetailHeader};
