import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.module.scss';
import ClassNames from 'classnames';

const GridListSwitcher = (
	{
		gridItemComponent,
		listItemComponent,
		displayGridLayout
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.gridListSwitcher_grid]: displayGridLayout,
			[classes.gridListSwitcher_list]: !displayGridLayout
		},
		classes.gridListSwitcher
	);

	const layout = displayGridLayout ? gridItemComponent : listItemComponent;

	return (
		<div className={componentClassName}>
			{layout}
		</div>
	);
};

GridListSwitcher.propTypes = {
	displayGridLayout: PropTypes.bool,
	gridItemComponent: PropTypes.array,
	listItemComponent: PropTypes.array,
};

export { GridListSwitcher };
