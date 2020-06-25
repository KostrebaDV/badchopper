import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from '../../../utils';
import { getGridItemsStyles, getBaseGridStyles, getGridItems } from './gridUtils';
import classes from './styles/index.module.scss';
import classNames from 'classnames';

const GridLayoutRow = (
	{
		grid,
		children,
		gapColumn,
		className,
		alignItems,
		gridColumn,
        onClick,
        gridGap,
	}
	) => {
	const componentClassName = classNames(
		classes.gridLayoutRow,
		className
	);

	const gridItems = getGridItems(grid);
    const gridItemsStyles = getGridItemsStyles(gridItems);

    return (
        <div
            onClick={onClick}
            className={componentClassName}
            style={getBaseGridStyles({
                gapColumn,
                gridColumn,
                alignItems,
                gridGap
            })}
        >
            {children.map((child, index) => {
                const key = getUniqueKey('griditem', index);

                return (
                    <div key={key} style={gridItemsStyles[index]}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

GridLayoutRow.defaultProps = {
	grid: '',
	gapColumn: 0,
	gridColumn: 12,
    onClick: () => {},
	alignItems: 'start',
    gridGap: ''
};

GridLayoutRow.propTypes = {
	grid: PropTypes.string,
    gridGap: PropTypes.string,
    gridTemplateColumns: PropTypes.string,
	gapColumn: PropTypes.number,
	gridColumn: PropTypes.number,
	className: PropTypes.string,
	alignItems: PropTypes.string,
    onClick: PropTypes.func
};

export { GridLayoutRow };
