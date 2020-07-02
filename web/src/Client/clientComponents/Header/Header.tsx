import React from 'react';
import classes from './styles/index.module.scss';
import {Typography} from '../../../Admin/baseComponents/Typography/Typography';
import {Button} from '../Button/Button';

const Header = (
    {
        label,
        content,
        showButton
    }
) => {
    return (
        <div className={classes.header}>
            <Typography
                displayBlock
                lineHeight="1"
                className={classes.header__label}
                variant="82"
            >
                {label}
            </Typography>
            <div>
                <Typography
                    displayBlock
                    variant="20"
                    className={classes.header__description}
                >
                    {content}
                </Typography>
                {
                    showButton && (
                        <Button
                            className={classes.header__button}
                            labelUppercase
                            label="!!записаться онлайн"
                            onClick={() => {}}
                        />
                    )
                }
            </div>
        </div>
    );
};

Header.defaultProps ={
  showButton: false
};

export {Header};
