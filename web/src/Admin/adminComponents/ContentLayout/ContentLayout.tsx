import React from 'react';
import {MarginBox} from '../../baseComponents/MarginBox/MarginBox';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const ContentLayout = (
    {
        hasMargin,
        children,
        className: classNameFromProps
    }
) => {
    const componentClassName = ClassNames(
        classes.contentLayout,
        classNameFromProps
    );

    return (
        <MarginBox
            normal={hasMargin}
            className={componentClassName}
        >
            {children}
        </MarginBox>
    );
};

ContentLayout.defaultProps = {
    className: '',
    hasMargin: true
};

export {ContentLayout};
