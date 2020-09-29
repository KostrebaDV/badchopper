import React, {FC} from 'react';
import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

type BasePageLayoutLeftProps = {
    className?: string;
    children?: any;
}

const BasePageLayoutLeft:FC<BasePageLayoutLeftProps> = (
    {
        children,
        className
    }
) => {
    const componentClassName = ClassNames(
        classes.basePageLayoutLeft,
        className
    );

    return (
        <div className={componentClassName}>
            {children}
        </div>
    );
};

export {BasePageLayoutLeft};
