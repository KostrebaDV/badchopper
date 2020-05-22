export const getFileExtension = (val) => {
	const splitedVal = val.split('.');
	const extensionIndex = splitedVal.length - 1;

	return val.split('.')[extensionIndex];
};
