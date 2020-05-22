export const getFileName = (val) => {
	const splitedVal = val.split('.');
	splitedVal.pop();

	return splitedVal[0];
};
