export const updateFileName = (array, name, index) => {
	Object.defineProperty(array[index], 'name', {
		writable: true,
		value: name
	});

	return array;
};
