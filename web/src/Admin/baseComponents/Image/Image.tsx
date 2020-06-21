import React from 'react';
import {HOST} from '../../../const';
import { Icon } from '@iconify/react';
import fileImageOutline from '@iconify/icons-mdi/file-image-outline';
import classes from './styles/index.module.scss';
import {isNull} from '../../../utils';
import ClassNames from 'classnames';

const Image = (
    {
        src,
        alt,
        width,
        height,
        padding,
        boxShadow,
        className
    }
) => {
    const componentClassName = ClassNames(
        classes.image,
        className
    )

    return (
        <>
            {
                !isNull(src) && (
                    <img
                        className={componentClassName}
                        src={`${HOST}${src}`}
                        alt={alt}
                        style={{
                            width,
                            height,
                            padding,
                            boxShadow
                        }}
                    />
                )
            }
            {
                isNull(src) && (
                    <div
                        style={{
                            width,
                            height
                        }}
                        className={classes.image__noImage}
                    >
                        <Icon
                            style={{
                                fontSize: width / height * 60
                            }}
                            className={classes.image__noImageIcon}
                            icon={fileImageOutline}
                        />
                    </div>
                )
            }
        </>
    );
};

Image.defaultProps = {
    width: 200,
    height: 200,
    padding: 0,
    boxShadow: '',
    className: ''
};

export {Image};
