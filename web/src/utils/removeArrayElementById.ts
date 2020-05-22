export const removeArrayElementById = (array, id, idKey = 'id') => {
	const index = array.findIndex(item => {
		return item[idKey] === id;
	});

    if (index !== -1) array.splice(index, 1);

	return array;
};
