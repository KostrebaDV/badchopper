import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.module.scss';
import {Typography} from "../../../Admin/baseComponents/Typography/Typography";

const FormFieldBox = (
	{
		children,
		label,
        value,
		required,
		hasErrors,
		hasFocus,
		displayInline,
        dynamicHeight
	}
) => {
	const componentClassName = classNames(
		{
			[classes.formFieldBox_displayInline]: displayInline
		}
	);

	const fieldWrapperClassName = classNames(
		{
			[classes.formFieldBox_fieldWrapper__hasError]: hasErrors,
			[classes.formFieldBox_dynamicHeight]: dynamicHeight,
			[classes.formFieldBox_fieldWrapper__hasFocus]: hasFocus,
			[classes.formFieldBox_dynamicHeight__filled]: hasFocus || value,
			[classes.formFieldBox_fieldWrapper__displayInline]: displayInline
		},
        classes.formFieldBox
	);

	return (
		<div className={componentClassName}>
			{
				label && (
					<div className={classes.formFieldBox_labelWrapper}>
						<div>
							<Typography variant="16">{label}</Typography>
							{
								required && (
									<span className={classes.formFieldBox_required}>*</span>
								)
							}
						</div>
					</div>
				)
			}
			<div className={fieldWrapperClassName}>
				{children}
			</div>
		</div>
	);
};

FormFieldBox.defaultProps = {
	hasBorder: true,
	hasFocus: false,
    hasErrors: false,
	hasTooltip: false,
	displayInline: false,
};

FormFieldBox.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
	label: PropTypes.string,
	children: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.array.isRequired,
    ]),
	required: PropTypes.bool,
	hasErrors: PropTypes.bool,
	hasBorder: PropTypes.bool,
	hasFocus: PropTypes.bool,
	hasTooltip: PropTypes.bool,
	displayInline: PropTypes.bool,
	toolTipIcon: PropTypes.string,
	toolTipMessage: PropTypes.string,
};

export { FormFieldBox };
