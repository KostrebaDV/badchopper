export const redirect = (promise) => {
    return promise
        .then(data => {
            if (data.data.redirect) {
                window.location = data.data.location;
                return;
            }

            return data;
        });
};
