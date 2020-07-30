import React from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const NavigationMenuContentWrapperMobile = (
    {
        isOpen,
        render,
        zIndex
    }
) => {
    const componentClassName = ClassNames(
        classes.navigationMenuContentWrapperMobile,
        {
            [classes.navigationMenuContentWrapperMobile__open]: isOpen,
            [classes.navigationMenuContentWrapperMobile__close]: !isOpen,
            [classes.navigationMenuContentWrapperMobile_zIndex]: zIndex
        }
    );

    return (
        <div className={componentClassName}>
            {render()}
        </div>
    );
};

NavigationMenuContentWrapperMobile.defaultProps = {
    zIndex: false
};

export {NavigationMenuContentWrapperMobile};
