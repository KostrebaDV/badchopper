import React from 'react';
import PropTypes from 'prop-types';

import classes from './style/index.module.scss';

const FormLayoutItem = ({ children }) => {
	return (
		<div className={classes.formLayoutItem}>{children}</div>
	);
};

FormLayoutItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]),
};

export { FormLayoutItem };
