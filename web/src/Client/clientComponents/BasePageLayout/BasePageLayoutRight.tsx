import React, {FC} from 'react';
import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

type BasePageLayoutRightProps = {
    className?: string;
    children: any;
}

const BasePageLayoutRight:FC<BasePageLayoutRightProps> = (
    {
        children,
        className
    }
) => {
    const componentClassName = ClassNames(
        classes.basePageLayoutRight,
        className
    );

    return (
        <div className={componentClassName}>
            {children}
        </div>
    );
};

export {BasePageLayoutRight};
