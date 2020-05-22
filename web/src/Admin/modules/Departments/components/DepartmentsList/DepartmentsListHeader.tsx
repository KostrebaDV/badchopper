import React from 'react';
import { useHistory } from "react-router-dom";
import ContentHeader, {ContentHeaderLeft, ContentHeaderRight} from '../../../../adminComponents/ContentHeader';
import {Typography} from '../../../../baseComponents/Typography/Typography';
import {Button} from '../../../../baseComponents/Button/Button';
import classes from './styles/index.module.scss';
import {ROUTES} from '../../../../adminComponents/Content/routes';

const DepartmentsListHeader = () => {
    const history = useHistory();

    const actionButtonHandler = () => {
        history.push(ROUTES.ADD_DEPARTMENT);
    };

    return (
        <ContentHeader>
            <ContentHeaderLeft>
                <Typography
                    variant="24"
                >
                    !!Филиалы
                </Typography>
            </ContentHeaderLeft>
            <ContentHeaderRight>
                <Button
                    type="primary"
                    transparent
                    label="!!Добавить филиал"
                    className={classes.departmentHeader__actionButton}
                    actionHandler={actionButtonHandler}
                />
            </ContentHeaderRight>
        </ContentHeader>
    );
};

export {DepartmentsListHeader};
