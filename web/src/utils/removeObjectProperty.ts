export const removeObjectProperty = (object, property) => {
	return Object.keys(object).reduce((acc, key) => {
		if (key !== property) {
			acc[key] = object[key];
		}

		return acc;
	}, {});
};
