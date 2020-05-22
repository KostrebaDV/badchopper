import React, { forwardRef } from 'react';

import { Button } from '../Button/Button';
import dotsHorizontal from '@iconify/icons-mdi/dots-horizontal';

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

type TooltipActionDefaultButtonType = {
    className: string;
    handleTooltipActionClick: (object) => void;
}

const TooltipActionDefaultButton = forwardRef<{}, TooltipActionDefaultButtonType>((
	{
		className,
		handleTooltipActionClick
	},
	ref
) => {
	const componentClassName = ClassNames(
		classes.tooltipActionDefaultButton,
		className
	);

	return (

		<div
            //@ts-ignore
			ref={ref}
			onClick={event => handleTooltipActionClick(event)}
		>
			<Button
				noBorder
				size="small"
				transparent
				icon={dotsHorizontal}
				className={componentClassName}
			/>
		</div>
	);
});

export default TooltipActionDefaultButton;
