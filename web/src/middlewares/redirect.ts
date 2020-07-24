export const redirect = (promise) => {
    return promise
        .then(data => {
            if (data.data.location) {
                window.location = data.data.location;
                return;
            }

            return data;
        });
};
