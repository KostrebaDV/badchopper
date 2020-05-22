import React from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../PaddingBox/PaddingBox';
import { MarginBox } from '../MarginBox/MarginBox';

import classes from './styles/index.module.scss';

export const SuccessMessage = (
	{
		title,
		margin,
		padding
	}
) => {
	return (
		<MarginBox {...margin}>
			<PaddingBox
				{...padding}
				className={classes.message_success}
			>
				<div>{title}</div>
			</PaddingBox>
		</MarginBox>
	);
};

SuccessMessage.defaultProps = {
	padding: { small: true },
	margin: { tTiny: true }
};

SuccessMessage.propTypes = {
	title: PropTypes.string,
	margin: PropTypes.object,
	padding: PropTypes.object
};

export const InfoMessage = (
	{
		title,
		margin,
		padding
	}
) => {
	return (
		<MarginBox {...margin}>
			<PaddingBox
				{...padding}
				className={classes.message_info}
			>
				<div>{title}</div>
			</PaddingBox>
		</MarginBox>
	);
};

InfoMessage.defaultProps = {
	padding: { small: true },
	margin: { tTiny: true }
};

InfoMessage.propTypes = {
	title: PropTypes.string,
	margin: PropTypes.object,
	padding: PropTypes.object
};

export const WarningMessage = (
	{
		title,
		margin,
		padding
	}
) => {
	return (
		<MarginBox {...margin}>
			<PaddingBox
				{...padding}
				className={classes.message_warning}
			>
				<div>{title}</div>
			</PaddingBox>
		</MarginBox>
	);
};

WarningMessage.defaultProps = {
	padding: { small: true },
	margin: { tTiny: true }
};

WarningMessage.propTypes = {
	title: PropTypes.string,
	margin: PropTypes.object,
	padding: PropTypes.object
};

export const DangerMessage = (
	{
		title,
		margin,
		padding
	}
) => {
	return (
		<MarginBox {...margin}>
			<PaddingBox
				{...padding}
				className={classes.message_danger}
			>
				<div>{title}</div>
			</PaddingBox>
		</MarginBox>
	);
};

DangerMessage.defaultProps = {
	padding: { small: true },
	margin: { tTiny: true }
};

DangerMessage.propTypes = {
	title: PropTypes.string,
	margin: PropTypes.object,
	padding: PropTypes.object
};
