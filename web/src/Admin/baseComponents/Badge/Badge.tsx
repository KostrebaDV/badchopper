import React, { forwardRef } from 'react';

import classNames from 'classnames';
import classes from './styles/index.module.scss';

type BadgeProps = {
    message: string | [] | object | number;
    type?: string;
};

const Badge = forwardRef<{}, BadgeProps>((
	{
		message,
		type
	},
	ref
) => {
	const componentClassName = classNames(
		classes.badge,
		{
			[classes.badge_primary]: type === 'primary',
			[classes.badge_success]: type === 'success',
			[classes.badge_info]: type === 'info',
			[classes.badge_warning]: type === 'warning',
			[classes.badge_danger]: type === 'danger'
		}
	);

	return (
		<div
            //@ts-ignore
			ref={ref}
			className={componentClassName}
		>
			{message}
		</div>
	);
});

Badge.defaultProps = {
    type: 'info'
};

export { Badge };
