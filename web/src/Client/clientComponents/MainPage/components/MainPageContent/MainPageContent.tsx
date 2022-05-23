import React, {useContext} from 'react';
import {MainPageContentItem} from './MainPageContentItem';
import {getUniqueKey, translate} from '../../../../../utils';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {AppContext} from '../../../../App/store';
import {Typography} from "../../../../../Admin/baseComponents/Typography/Typography";
import {codes} from "../../../../../static/translations/codes";

const MainPageContent = () => {
    const {departments} = useContext(AppContext);

    const componentClassName = ClassNames(
        classes.mainPageContent,
        'gridImageContent'
    );

    return (
        <>
            <Typography
                bold="600"
                className={classes.mainPageContentLabel}
            >
                {translate(codes.mainPageLabel)}
            </Typography>
            <div className={componentClassName}>
                {
                    departments.map((item, index) => {
                        return (
                            <MainPageContentItem
                                key={getUniqueKey()}
                                item={item}
                                index={index + 1}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};

export {MainPageContent};
