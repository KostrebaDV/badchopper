import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";
import check from "@iconify/icons-mdi/check";

import ClassNames from 'classnames';
import classes from './styles/index.module.scss';
import {getUniqueKey, removeArrayElementByValue} from '../../../utils';

const CheckboxGroup = (
	{
		value,
        items,
        previewMode,
        disabled,
		onFieldChange,
        multipleSelect,
	}
) => {
	const [checkboxValue, setCheckboxValue] = useState<any[]>([]);

	useEffect(() => {
		if (value) {
			onFieldChange(value);
			setCheckboxValue(value);
		}
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const onMultipleSelectCheckboxChange = (itemValue) => {
        if (checkboxValue.includes(itemValue)) {
            const mutateValues = removeArrayElementByValue(checkboxValue, itemValue)
            setCheckboxValue(mutateValues)

            return onFieldChange(mutateValues);
        }

        setCheckboxValue([...checkboxValue, itemValue]);
        onFieldChange([...checkboxValue, itemValue]);
    }

    const onSingleSelectCheckboxChange = (itemValue) => {
        setCheckboxValue([itemValue]);
        onFieldChange([itemValue]);
    }

	const ToggleCheckbox = (itemValue: string | number) => {
	    if (previewMode || disabled) return;

        if (multipleSelect) {
            onMultipleSelectCheckboxChange(itemValue)
        } else {
            onSingleSelectCheckboxChange(itemValue)
        }
    };

	const checkboxClassName = ClassNames(
        {
            [classes.checkbox__notAllowed]: disabled,
            [classes.checkbox__preview]: previewMode,
        },
        classes.checkbox
    )

	return items.map(item => {
	    const {id, content} = item;

        const checkboxIconClassName = ClassNames(
            classes.checkboxIcon_icon,
            {
                [classes.checkboxIcon__checked]: checkboxValue.includes(id),
            }
        );

	    return (
            <div
                key={getUniqueKey()}
                className={classes.checkboxGroup__item}
            >
                <div
                    onClick={() => ToggleCheckbox(id)}
                    className={checkboxClassName}
                >
                    <Icon
                        className={checkboxIconClassName}
                        icon={check}
                    />
                </div>
                <div className={classes.checkboxGroup__content}>
                    {content}
                </div>
            </div>
        )
    });
};

CheckboxGroup.defaultProps = {
    multipleSelect: true,
    previewMode: false,
}

CheckboxGroup.propTypes = {
    multipleSelect: PropTypes.bool,
	className: PropTypes.string,
	onFieldChange: PropTypes.func,
	iconClassName: PropTypes.string,
	iconCheckClassName: PropTypes.string
};

export { CheckboxGroup };
