import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import { ScrollContainer } from '../ScrollContainer/ScrollContainer';

import { OverlayPoint } from '../OverlayPoint/OverlayPoint';
import DropDownItem from './DropDownItem';
import { LoadSpinner } from '../LoadSpinner/LoadSpinner';
import { Icon } from "@iconify/react";
import chevronDown from "@iconify/icons-mdi/chevron-down";
import chevronUp from "@iconify/icons-mdi/chevron-up";

import ClasseNames from 'classnames';
import classes from './styles/index.module.scss';
import { COLORS } from '../../styles/colors/baseColors';
import { isNullOrUndefined } from '../../../utils';

const Dropdown = (
	{
		items,
		value,
		isOpen,
		placeholder,
		multiSelect,
		displayValue: displayValueFromProp,
		onFieldFocus,
		onFieldChange,
		isItemPending,
		onDropdownClick,
		hasDefaultValue,
        disabled
	}
) => {
	const dropdownRef = useRef(null);
	const [open, setOpen] = useState(false);
	const [displayValue, setDisplayValue] = useState('');

	const hasItems = items.length !== 0;

	useEffect(() => {
		setOpen(isOpen);
		if (displayValueFromProp !== '') {
			setDisplayValue(displayValueFromProp);
		}
	}, [isOpen, displayValueFromProp]);

	const toggleDropdown = useCallback(() => {
	    if (disabled) return;

		if (!open) onDropdownClick();

		onFieldFocus(!open);
		setOpen(!open);
	}, [open, onDropdownClick, onFieldFocus, disabled]);

	const onItemSelect = useCallback((id) => {
		const selectedItem = items.find(i => i.id === id);

		setDisplayValue(selectedItem.name);

		onFieldChange(id);
	}, [items, onFieldChange]);

	const handleItemClick = useCallback((id) => {
		onItemSelect(id);

		if (!multiSelect) {
            onDropdownClick();
            onFieldFocus(false);
            setOpen(false);
		}
	}, [multiSelect, onItemSelect, onFieldFocus, onDropdownClick]);

	useEffect(() => {
		if (isNullOrUndefined(value)) {
			return setDisplayValue(placeholder);
		}

		if (value) {
            onItemSelect(value)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const getDropdownItems = useMemo(() => {
		if (hasDefaultValue) {
			items.unshift({
				name: '!!пусто',
				id: null
			});
		}

		return items.map(item => {
			return (
				<DropDownItem
					key={item.id}
					value={item.name}
					id={item.id}
					handleItemClick={handleItemClick}
				/>
			);
		});
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items]);

	const dropdownItems = useMemo(() => {
		return hasItems
			? getDropdownItems
			: (
				<DropDownItem
					key={-1}
					value="!пусто"
					id={null}
				/>
			);
	}, [getDropdownItems, hasItems]);

	const getIcon = () => {
		return !isItemPending
			? (
				<Icon
					className={classes.dropdown_icon}
					icon={open ? chevronUp : chevronDown}
					color={COLORS.FIELD_ICON}
				/>
			) : (
				<LoadSpinner
					className={classes.dropdown_icon}
				/>
			);
	};

    const componentClassName = ClasseNames(
        {
            [classes.dropdown__disabled]: disabled
        },
        classes.dropdown
    );

	const placeholderClassName = ClasseNames(
        {
            [classes.dropdownItem_placeholder]: placeholder && !value
        }
    );

	return (
		<div className={componentClassName}>
			<div
				ref={dropdownRef}
				className={classes.dropdown_selectArea}
				onClick={toggleDropdown}
			>
				<div className={placeholderClassName}>{displayValue}</div>
				{getIcon()}

			</div>
			{
				open && !isItemPending && (
					<OverlayPoint
						componentRef={dropdownRef.current}
						overlayBehavior="dropdown"
						onClose={toggleDropdown}
						render={
							({ parentWidth }) => {
								return (

										<div style={{ width: parentWidth }} className={classes.dropdown_container}>
											<ScrollContainer>
												{dropdownItems}
											</ScrollContainer>
										</div>

								);
							}
						}
					/>
				)
			}
		</div>
	);
};

Dropdown.defaultProps = {
	isOpen: false,
    disabled: false,
	multiSelect: false,
	hasDefaultValue: false,
	items: [],
	placeholder: '###пусто',
	displayValue: '',
	onDropdownClick: () => {},
	onFieldFocus: () => {}
};

Dropdown.propTypes = {
	items: PropTypes.array,
	isOpen: PropTypes.bool,
	multiSelect: PropTypes.bool,
	isItemPending: PropTypes.bool,
	hasDefaultValue: PropTypes.bool,
	placeholder: PropTypes.string,
	displayValue: PropTypes.string,
	onFieldChange: PropTypes.func,
	onDropdownClick: PropTypes.func,
	onFieldFocus: PropTypes.func,
};

export { Dropdown };
