import React, {useContext} from 'react';
import {MainPageContentItem} from './MainPageContentItem';
import {getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {AppContext} from '../../../../App/store';

const MainPageContent = () => {
    const {departments} = useContext(AppContext);

    const componentClassName = ClassNames(
        classes.mainPageContent,
        'gridImageContent'
    );

    return (
        <div className={componentClassName}>
            {
                departments.map(item => {
                    return (
                        <MainPageContentItem
                            key={getUniqueKey()}
                            item={item}
                        />
                    );
                })
            }
        </div>
    );
};

export {MainPageContent};
