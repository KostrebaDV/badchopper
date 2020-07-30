import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';

const DropDownItem = ({ value, id, handleItemClick }) => {
	return (
		<div
			onClick={() => handleItemClick(id)}
			className={classes.dropdownItem}
		>
			{value}
		</div>
	);
};

DropDownItem.defaultProps = {
	handleItemClick: () => {}
};

DropDownItem.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
	handleItemClick: PropTypes.func,
};

export default DropDownItem;
