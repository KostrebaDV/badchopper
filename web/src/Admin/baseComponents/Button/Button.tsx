import React, { FC } from 'react';

import { Icon } from "@iconify/react";
import { LoadSpinner } from '../LoadSpinner/LoadSpinner';

import classNames from 'classnames';
import classes from './styles/index.module.scss';
import {ButtonType} from './types';

const Button: FC<ButtonType> = (
	{
		size,
		type,
		icon,
		label,
        floatRight,
		noBorder,
		className,
		isPending,
		actionName,
		transparent,
		actionHandler,
	}
) => {
	const componentClassName = classNames(
		classes.button,
		{
			[classes.button_primary]: !transparent && type === 'primary',
			[classes.button_secondary]: !transparent && type === 'secondary',
			[classes.button_success]: !transparent && type === 'success',
			[classes.button_danger]: !transparent && type === 'danger',
			[classes.button_warning]: !transparent && type === 'warning',
			[classes.button_info]: !transparent && type === 'info',
			[classes.button_light]: !transparent && type === 'light',
			[classes.button_grey]: !transparent && type === 'grey',
			[classes.button_dark]: !transparent && type === 'dark',

			[classes.button_primary__transparent]: transparent && type === 'primary',
			[classes.button_secondary__transparent]: transparent && type === 'secondary',
			[classes.button_success__transparent]: transparent && type === 'success',
			[classes.button_danger__transparent]: transparent && type === 'danger',
			[classes.button_warning__transparent]: transparent && type === 'warning',
			[classes.button_info__transparent]: transparent && type === 'info',
			[classes.button_light__transparent]: transparent && type === 'light',
			[classes.button_grey__transparent]: transparent && type === 'grey',
			[classes.button_dark__transparent]: transparent && type === 'dark',

			[classes.button_size__tiny]: size === 'tiny',
			[classes.button_size__small]: size === 'small',
			[classes.button_size__normal]: size === 'normal',
			[classes.button_size__large]: size === 'large',

			[classes.button_hasIcon]: icon,
			[classes.button_onlyIcon]: !label,

			[classes.button_noBorder]: noBorder,
			[classes.button_floatRight]: floatRight,
		},
		className
	);

	const componentLabelClassName = classNames(
		{
			[classes.button_label]: icon,
		}
	);

	const action =(event) => {
	    if (!!actionHandler) {
            actionHandler(event, actionName)
        }
    };

	return (
		<>
			{
				!isPending && (
					<div
						className={componentClassName}
						onClick={e => action(e)}
					>
						{
							icon && (
								<Icon
									icon={icon}
								/>
							)
						}
						{
							label && (
								<span className={componentLabelClassName}>
									{label}
								</span>
							)
						}
					</div>
				)
			}
			{
				isPending && (
					<LoadSpinner
						width={25}
						height={25}
						className={className}
					/>
				)
			}
		</>
	);
};

Button.defaultProps = {
	className: '',
	size: 'normal',
	type: 'secondary',
	isPending: false,
	noBorder: false,
    floatRight: false,
	actionName: '',
	transparent: false,
	actionHandler: () => {}
};

export { Button };
