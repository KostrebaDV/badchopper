import React from 'react';
import PropTypes from 'prop-types';

const FormLayout = ({ children }) => {
	return (
	    <>
            {children}
        </>
    );
};

FormLayout.propTypes = {
	children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.object
		]),
};

export { FormLayout };
