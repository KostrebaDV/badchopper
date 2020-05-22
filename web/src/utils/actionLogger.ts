export const actionLogger = (action, payload, ommited) => {
	const payloadObj = payload === undefined ? '' : payload;

	if (action !== ommited) console.log(`%c${action}`, 'color: green; font-size: 16px', payloadObj);

	return {
		payload
	};
};

export const actionLoggerWarning = (msg) => {
	console.warn(msg);
};
