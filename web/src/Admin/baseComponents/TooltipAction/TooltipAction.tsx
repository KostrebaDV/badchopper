import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { OverlayPoint } from '../OverlayPoint/OverlayPoint';
import TooltipActionList from './TooltipActionList';
import TooltipActionDefaultButton from './TooltipActionDefaultButton';

const TooltipAction = (
	{
		className,
		actionList,
		targetElementId,
		toolTipButtonOpen,
		toolTipButtonClose,
		handleTooltipClick
	}
) => {
	const [show, setShow] = useState(false);
	const tooltipActionRef = useRef(null);

	const handleTooltipActionClick = (event) => {
		event.stopPropagation();

		setShow(!show);
		handleTooltipClick(!show);
	};

	return (
		<>
			{
				toolTipButtonClose && toolTipButtonOpen && (
					<div
						className={className}
						ref={tooltipActionRef}
					>
						{
							show && (
								<div
									onClick={event => handleTooltipActionClick(event)}
								>
									{toolTipButtonOpen}
								</div>
							)
						}
						{
							!show && (
								<div
									onClick={event => handleTooltipActionClick(event)}
								>
									{toolTipButtonClose}
								</div>
							)
						}
					</div>
				)
			}
			{
				!toolTipButtonClose && !toolTipButtonOpen && (
					<TooltipActionDefaultButton
						ref={tooltipActionRef}
						className={className}
						handleTooltipActionClick={handleTooltipActionClick}
					/>
				)
			}
			{
				show && (
					<OverlayPoint
						position="bottom-left-center"
                        //@ts-ignore
						onClose={handleTooltipActionClick}
						componentRef={tooltipActionRef.current}
						render={() => {
								return (
									<TooltipActionList
										actionList={actionList}
										targetElementId={targetElementId}
										handleOnClick={handleTooltipActionClick}
									/>
								);
							}
						}
					/>
				)
			}
		</>
	);
};

TooltipAction.defaultProps = {
	handleTooltipClick: () => {}
};

TooltipAction.propTypes = {
	className: PropTypes.string,
	targetElementId: PropTypes.number,
	handleTooltipClick: PropTypes.func,
	toolTipButtonOpen: PropTypes.object,
	toolTipButtonClose: PropTypes.object,
	actionList: PropTypes.array.isRequired
};

export { TooltipAction };
