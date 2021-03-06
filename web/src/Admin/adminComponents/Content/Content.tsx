import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import {ROUTES} from './routes';
import {Assistance} from '../../modules/Assistance/Assistance';
import {Departments} from '../../modules/Departments/Departments';
import {Media} from '../../modules/Media/Media';
import classes from './styles/index.module.scss'
import {DepartmentAdd} from '../../modules/Departments/components/DepartmentAdd/DepartmentAdd';
import {Staff} from '../../modules/Staff/Staff';
import {Comments} from '../../modules/Comments/Comments';
import {Gallery} from '../../modules/Gallery/Gallery';

const Content = () => {
    return (
        <div className={classes.content}>
			<Switch>
				<Route path={ROUTES.ASSISTANCE}>
					<Assistance/>
				</Route>
                <Route path={ROUTES.DEPARTMENTS}>
                    <Departments/>
                </Route>
                <Route path={ROUTES.MEDIA}>
                    <Media/>
                </Route>
                <Route path={ROUTES.ADD_DEPARTMENT}>
                    <DepartmentAdd/>
                </Route>
                <Route path={ROUTES.STAFF}>
                    <Staff/>
                </Route>
                <Route path={ROUTES.GALLERY}>
                    <Gallery/>
                </Route>
                <Route path={ROUTES.COMMENTS}>
                    <Comments/>
                </Route>
			</Switch>
        </div>
    );
};

export {Content};
