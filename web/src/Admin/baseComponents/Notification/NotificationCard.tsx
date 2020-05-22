import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../PaddingBox/PaddingBox';
import { Button } from '../Button/Button';

import { isUndefined } from '../../../utils';
import ClassNames from 'classnames';
import classes from './styles/index.module.scss';
import closeIcon from '@iconify/icons-mdi/close';

const NotificationCard = (
	{
		id,
		type,
		message,
		duration,
		removeNotification
	}
) => {
	useEffect(() => {
		let timer;

		if (!isUndefined(duration)) {
			timer = setTimeout(handleRemoveNotification, duration);
		}

		return () => clearTimeout(timer);
	}, []);

	const handleRemoveNotification = () => {
		removeNotification(id);
	};

	const componentClassName = ClassNames(
		{
			[classes.notificationCard__danger]: type === 'danger',
			[classes.notificationCard__success]: type === 'success',
			[classes.notificationCard__warning]: type === 'warning',
			[classes.notificationCard__info]: type === 'info',
		},
		classes.notificationCard
	);

	return (
        //@ts-ignore
		<PaddingBox
			rTiny
			vrSmall
			lNormal
			className={componentClassName}
		>
			{ message }
			<Button
				noBorder
				transparent
				size="tiny"
				icon={closeIcon}
				type="secondary"
				actionHandler={handleRemoveNotification}
				className={classes.notificationCard_closeButton}
			/>
		</PaddingBox>
	);
};

NotificationCard.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	removeNotification: PropTypes.func.isRequired
};

export default NotificationCard;
