export const actionLogger = (action: string, payload?: object, ommited?: string) => {
    if (process.env.NODE_ENV === 'development') {
        const payloadObj = payload === undefined ? '' : payload;

        if (action !== ommited) console.log(`%c${action}`, 'color: green; font-size: 16px', payloadObj);

        return {
            payload
        };
    }
};

export const actionLoggerWarning = (msg) => {
    if (process.env.NODE_ENV === 'development') {
        console.warn(msg);
    }
};
