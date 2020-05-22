import React from 'react';
import {ContentLayout} from '../../../../adminComponents/ContentLayout/ContentLayout';
import {DepartmentsListItem} from './DepartmentsListItem';
import {EmptyContent} from '../../../../baseComponents/EmptyContent/EmptyContent';
import {PendingCloak} from '../../../../baseComponents/PendingCloak/PendingCloak';

import classes from './styles/index.module.scss';
import {Link} from '../../../../baseComponents/Link/Link';
import {ROUTES} from '../../../../adminComponents/Content/routes';

const DepartmentsListContent = (
    {
        pending,
        departmentsList
    }
) => {
    const hasDepartments = departmentsList.length !== 0;

    return (
        <>
            {
                pending && (
                    <PendingCloak/>
                )
            }
            {
                !pending && (
                    <ContentLayout>
                        {
                            hasDepartments && (
                                <div className={classes.departmentsListContent}>
                                    {
                                        departmentsList.map(item => {
                                            return (
                                                <Link
                                                    key={item._id}
                                                    link={`${ROUTES.DEPARTMENTS_DETAIL_LINK}${item._id}`}
                                                    className={classes.departmentsListItem}
                                                >
                                                    <DepartmentsListItem
                                                        departmentItem={item}
                                                    />
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                        {
                            !hasDepartments && (
                                <EmptyContent>
                                    !!Добавьте филиал
                                </EmptyContent>
                            )
                        }
                    </ContentLayout>
                )
            }
        </>
    );
};

export {DepartmentsListContent};
