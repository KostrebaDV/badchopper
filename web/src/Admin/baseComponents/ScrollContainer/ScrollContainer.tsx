import React, {FC} from 'react';

import classes from './styles/index.module.scss';
import {ScrollContainerType} from './types';

const ScrollContainer: FC<ScrollContainerType> = (
	{
		children
	}
) => {
	return (
		<div className={classes.scrollContainer}>{children}</div>
	);
};

export { ScrollContainer };
