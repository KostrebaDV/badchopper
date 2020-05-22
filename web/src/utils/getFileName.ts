export const getFileName = (val, separator = '.') => {
	const splitedVal = val.split(separator);
	splitedVal.pop();

	return splitedVal[0];
};
