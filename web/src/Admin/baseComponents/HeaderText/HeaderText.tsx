import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.module.scss';

const HeaderText = (
    {
        size,
        bold,
        bolder,
        children,
        ultraBold,
		className
    }
    ) => {
    const componentClassName = classNames(
		{
			[classes.headerText_1]: size === '1',
			[classes.headerText_2]: size === '2',
			[classes.headerText_3]: size === '3',
			[classes.headerText_4]: size === '4',
			[classes.headerText_5]: size === '5',
			[classes.headerText_6]: size === '6',
			[classes.headerText_bold]: bold,
			[classes.headerText_bolder]: bolder,
			[classes.headerText_ultraBold]: ultraBold,
		},
		className
	);

    return (
        <div className={componentClassName}>{ children }</div>
    );
};

HeaderText.defaultProps = {
    size: '3'
};

HeaderText.propTypes = {
    bold: PropTypes.bool,
    size: PropTypes.string,
    bolder: PropTypes.bool,
    ultraBold: PropTypes.bool,
	className: PropTypes.string
};

export { HeaderText };
