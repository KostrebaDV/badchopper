import React, { useRef, useState, FC } from 'react';
import { Icon } from '@iconify/react';
import alertCircleOutline from '@iconify/icons-mdi/alert-circle-outline';

import { OverlayPoint } from '../OverlayPoint/OverlayPoint';
import { Badge } from '../Badge/Badge';
import ClassNames from 'classnames';
import classes from './styles/index.module.scss';

type TooltipType = {
    icon: object;
    message: any;
    tooltip?: string | object | number;
    type?: string;
    position: string;
    tooltipClassName?: string;
    tooltipIconClassName?: string;
}

const Tooltip: FC<TooltipType> = (
	{
		icon,
		type,
		message,
		tooltip,
		position,
		tooltipIconClassName: iconClassName,
		tooltipClassName
	}
) => {
	const [show, setShow] = useState(false);
	const tooltipRef = useRef(null);

	const componentClassName = ClassNames(
		classes.tooltip,
		tooltipClassName
	);

	const tooltipIconClassname = ClassNames(
		iconClassName,
		{
			[classes.tooltip_defaultIcon__danger]: type === 'danger'
		},
		classes.tooltip_defaultIcon,
	);

	const handleTooltipEnter = () => {
		setShow(!show);
	};

	const handleTooltipLeave = () => {
		setShow(!show);
	};

	const defaultContent = (
		<Icon
			icon={icon}
			className={tooltipIconClassname}
		/>
	);

	return (
		<div
			ref={tooltipRef}
			onClick={handleTooltipEnter}
			className={componentClassName}
		>
			{tooltip || defaultContent}
			{
				show && (
					<OverlayPoint
						position={position}
						componentRef={tooltipRef.current}
						onClose={handleTooltipLeave}
						render={() => <Badge type={type} message={message} />}
					/>
				)
			}
		</div>
	);
};

Tooltip.defaultProps = {
	icon: alertCircleOutline,
	position: 'top-right'
};

export { Tooltip };
