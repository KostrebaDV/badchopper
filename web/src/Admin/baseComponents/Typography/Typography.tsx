import React, { FC } from 'react';

import classes from './styles/index.module.scss';
import ClassNames from 'classnames';
import {TypographyType} from './types';

const Typography: FC<TypographyType> = (
	{
		bold,
		variant,
		children,
        className,
		displayBlock,
        light
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.typography_8]: variant === '8',
			[classes.typography_12]: variant === '12',
			[classes.typography_14]: variant === '14',
			[classes.typography_16]: variant === '16',
			[classes.typography_18]: variant === '18',
			[classes.typography_20]: variant === '20',
			[classes.typography_22]: variant === '22',
			[classes.typography_24]: variant === '24',
			[classes.typography_26]: variant === '26',
			[classes.typography_28]: variant === '28',
			[classes.typography_32]: variant === '32',
			[classes.typography_bold200]: bold === '200',
			[classes.typography_bold300]: bold === '300',
			[classes.typography_bold400]: bold === '400',
			[classes.typography_bold500]: bold === '500',
			[classes.typography_bold600]: bold === '600',
			[classes.typography_bold700]: bold === '700',
			[classes.typography_bold800]: bold === '800',
			[classes.typography_displayBlock]: displayBlock,
			[classes.typography_light]: light
		},
        className
	);

	return (
		<span className={componentClassName}>{ children }</span>
	);
};

Typography.defaultProps = {
	bold: '400',
	variant: '16',
	displayBlock: false,
	light: false,
};

export { Typography };
