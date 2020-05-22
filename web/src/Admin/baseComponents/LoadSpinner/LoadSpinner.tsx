import React from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

const LoadSpinner = (
	{
		width,
		height,
		className
	}
) => {
	const componentClassName = ClassNames(
		classes['loadSpinner_sk-chase'],
		className
	);

	return (
		<div
			style={{ width, height }}
			className={componentClassName}
		>
			<div className={classes['loadSpinner_sk-chase-dot']}></div>
			<div className={classes['loadSpinner_sk-chase-dot']}></div>
			<div className={classes['loadSpinner_sk-chase-dot']}></div>
			<div className={classes['loadSpinner_sk-chase-dot']}></div>
			<div className={classes['loadSpinner_sk-chase-dot']}></div>
			<div className={classes['loadSpinner_sk-chase-dot']}></div>
		</div>
	);
};

LoadSpinner.defaultProps = {
	width: 15,
	height: 15
};

LoadSpinner.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	className: PropTypes.string,
};

export { LoadSpinner };
