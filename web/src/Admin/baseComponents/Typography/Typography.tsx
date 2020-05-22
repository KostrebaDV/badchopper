import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const Typography = (
	{
		bold,
		variant,
		children,
		displayBlock
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.typography_8]: variant === '8',
			[classes.typography_12]: variant === '12',
			[classes.typography_14]: variant === '14',
			[classes.typography_16]: variant === '16',
			[classes.typography_24]: variant === '24',
			[classes.typography_32]: variant === '32',
			[classes.typography_bold200]: bold === '200',
			[classes.typography_bold300]: bold === '300',
			[classes.typography_bold400]: bold === '400',
			[classes.typography_bold500]: bold === '500',
			[classes.typography_bold600]: bold === '600',
			[classes.typography_bold700]: bold === '700',
			[classes.typography_bold800]: bold === '800',
			[classes.typography_displayBlock]: displayBlock
		}
	);

	return (
		<span className={componentClassName}>{ children }</span>
	);
};

Typography.defaultProps = {
	bold: '400',
	variant: '16',
	displayBlock: false,

};

Typography.propTypes = {
	bold: PropTypes.string,
	variant: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	displayBlock: PropTypes.bool
};

export { Typography };
