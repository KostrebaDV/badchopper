import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { GET } from '../../../utils/api';

import { Dropdown } from '../Dropdown/Dropdown';

const AjaxDropdown = (
	{
		url,
		data,
		value,
		allowRequest,
		onFieldFocus,
		displayValue,
		onFieldChange,
		hasDefaultValue
	}
) => {
	const [items, setItems] = useState([]);
	const [isPending, setIsPending] = useState(false);
	const hasFetchedRef = useRef(false);

	const handleDropdownClick = () => {
		if (hasFetchedRef.current && !allowRequest) return;
		setIsPending(true);

		GET(url)
			.then(({ data }) => {
				setItems(data);
				hasFetchedRef.current = true;
			})
			.finally(() => setIsPending(false));
	};

	return (
		<Dropdown
			onDropdownClick={handleDropdownClick}
			items={items}
			value={value}
			isItemPending={isPending}
			onFieldFocus={onFieldFocus}
			displayValue={displayValue}
			onFieldChange={onFieldChange}
			hasDefaultValue={hasDefaultValue}
		/>
	);
};

AjaxDropdown.defaultProps = {
	allowRequest: false
};

AjaxDropdown.propTypes = {
	data: PropTypes.object,
	allowRequest: PropTypes.bool,
	url: PropTypes.string.isRequired,
};

export { AjaxDropdown };
