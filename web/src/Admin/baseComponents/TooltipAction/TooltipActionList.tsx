import React from 'react';
import PropTypes from 'prop-types';

import TooltipActionListSection from './TooltipActionListSection';
import classes from './styles/index.module.scss';
import { getUniqueKey } from '../../../utils';

const TooltipActionList = (
	{
		actionList,
		handleOnClick,
		targetElementId
	}
) => {
	return (
		<div className={classes.tooltipActionList}>
			{
				actionList.map((section) => {
					const key = getUniqueKey();

					return (
						<TooltipActionListSection
							key={key}
							actionList={section}
							handleOnClick={handleOnClick}
							targetElementId={targetElementId}
						/>
					);
				})
			}
		</div>
	);
};

TooltipActionList.defaultProps = {
	actionList: []
};

TooltipActionList.propTypes = {
	actionList: PropTypes.array,
	handleOnClick: PropTypes.func,
	targetElementId: PropTypes.number
};

export default TooltipActionList;
