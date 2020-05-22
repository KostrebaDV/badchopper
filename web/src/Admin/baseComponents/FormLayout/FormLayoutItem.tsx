import React from 'react';
import PropTypes from 'prop-types';

const FormLayoutItem = ({ children }) => {
	return (
		<>{children}</>
	);
};

FormLayoutItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]),
};

export { FormLayoutItem };
