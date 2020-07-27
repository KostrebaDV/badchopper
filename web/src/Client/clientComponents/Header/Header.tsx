import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import {Button} from '../Button/Button';
import ClassNames from 'classnames';

const Header = (
    {
        label,
        content,
        showButton,
        className
    }
) => {
    const componentClassName = ClassNames(
        classes.header,
        className
    );

    return (
        <div className={componentClassName}>
            <Typography
                displayBlock
                lineHeight="1"
                className={classes.header__label}
            >
                {label}
            </Typography>
            <div>
                {
                    content && (
                        <Typography
                            displayBlock
                            variant="20"
                            className={classes.header__description}
                        >
                            {content}
                        </Typography>
                    )
                }

                {
                    showButton && (
                        <Button
                            className={classes.header__button}
                            labelUppercase
                            label="!!записаться онлайн"
                            onClick={() => {
                            }}
                        />
                    )
                }
            </div>
        </div>
    );
};

Header.defaultProps = {
    showButton: false,
    content: '',
    className: ''
};

export {Header};
