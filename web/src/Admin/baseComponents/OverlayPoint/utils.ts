const baseOffset = 2;

const _getPositionValues = (componentRef, contentRef) => {
	const {
		top,
		left,
		width,
		height
	} = componentRef.getBoundingClientRect();

	const {
		width: contentWidth,
		height: contentHeight
	} = contentRef.getBoundingClientRect();

	return {
		top,
		left,
		width,
		height,
		contentWidth,
		contentHeight
	};
};

const getGeneralPosition = (componentRef, contentRef, position) => {
	const {
		top,
		left,
		width,
		height,
		contentWidth,
		contentHeight
	} = _getPositionValues(componentRef, contentRef);

	const definedPosition: { left: number | null, top: number | null } = {
		left: null,
		top: null
	};

	switch (position) {
		case 'top':
			definedPosition.left = left - (contentWidth / 2) + baseOffset;
			definedPosition.top = top - contentHeight - baseOffset;
			break;
		case 'top-left':
			definedPosition.left = left - contentWidth + baseOffset;
			definedPosition.top = top - contentHeight - baseOffset;
			break;
		case 'top-right':
			definedPosition.left = left + width + baseOffset;
			definedPosition.top = top - contentHeight - baseOffset;
			break;
		case 'left':
			definedPosition.left = left - contentWidth - baseOffset;
			definedPosition.top = top - (contentHeight / 2) + (height / 2);
			break;
		case 'right':
			definedPosition.left = left + width + baseOffset;
			definedPosition.top = top - (contentHeight / 2) + (height / 2);
			break;
		case 'bottom':
			definedPosition.left = left - (contentWidth / 2) + (width / 2);
			definedPosition.top = top + height + baseOffset;
			break;
		case 'bottom-left':
			definedPosition.left = left - contentWidth - baseOffset;
			definedPosition.top = top + height + baseOffset;
			break;
		case 'bottom-left-center':
			definedPosition.left = left - contentWidth + width;
			definedPosition.top = top + height + 8;
			break;
		case 'bottom-right':
			definedPosition.left = left + width + baseOffset;
			definedPosition.top = top + height + baseOffset;
			break;
		case 'mobile-navigation':
			definedPosition.left = left - 8;
			definedPosition.top = top + height + 8;
			break;
		default:
			definedPosition.left = left;
			definedPosition.top = top + height;
	}

	return definedPosition;
};

const getDropdownPosition = (componentRef, layoutRef) => {
	const {
		top,
		left,
		height
	} = _getPositionValues(componentRef, layoutRef);

	return {
		left,
		top: top + height + 1
	};
};

export {
	getGeneralPosition,
	getDropdownPosition
};
