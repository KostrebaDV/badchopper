import React, {useState, useEffect} from 'react';
import {getAllDepartments} from '../../api';
import {MainPageContentItem} from './MainPageContentItem';
import {getUniqueKey} from '../../../../../utils';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const MainPageContent = () => {
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        getAllDepartments()
            .then(({data}) => setDepartments(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    )
                })
            }
        </div>
    )
};

export {MainPageContent};
