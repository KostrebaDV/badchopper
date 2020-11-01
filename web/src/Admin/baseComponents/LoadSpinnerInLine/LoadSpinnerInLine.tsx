import React from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

const LoadSpinnerInLine = (
    {
        width,
        height,
        className
    }
) => {
    const componentClassName = ClassNames(
        classes.loadSpinnerInLineSkFlow,
        className
    );

    return (
        <div
            style={{width, height}}
            className={componentClassName}
        >
            <div className={classes.loadSpinnerInLineSkFlowDot}></div>
            <div className={classes.loadSpinnerInLineSkFlowDot}></div>
            <div className={classes.loadSpinnerInLineSkFlowDot}></div>
        </div>
    );
};

LoadSpinnerInLine.defaultProps = {
    width: 15,
    height: 15
};

LoadSpinnerInLine.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
};

export {LoadSpinnerInLine};
