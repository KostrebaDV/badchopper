import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';

const ScrollContainer = (
	{
		children
	}
) => {
	return (
		<div className={classes.scrollContainer}>{children}</div>
	);
};

ScrollContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	])
};

export { ScrollContainer };
