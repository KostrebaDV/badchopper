import React, {FC} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

type BasePageLayoutProps = {
    className?: string;
    children: any;
}

const BasePageLayout:FC<BasePageLayoutProps> = (
    {
        children,
        className
    }
) => {
    const componentClassName = ClassNames(
        classes.basePageLayout,
        className
    );

    return (
        <div className={componentClassName}>{children}</div>
    );
};

export {BasePageLayout};
