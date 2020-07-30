import React from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const NavigationMenuContentWrapper = (
    {
        isOpen,
        render
    }
) => {
    const componentClassName = ClassNames(
        classes.navigationMenuContentWrapper,
        {
            [classes.navigationMenuContentWrapper__open]: isOpen,
            [classes.navigationMenuContentWrapper__close]: !isOpen
        }
    );

    return (
        <div className={componentClassName}>
            {render()}
        </div>
    );
};

export {NavigationMenuContentWrapper};
