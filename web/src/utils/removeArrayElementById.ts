export const removeArrayElementById = (array, id) => {
	const index = array.findIndex(item => {
		return item.id === id;
	});

	array.splice(index, 1);

	return array;
};
