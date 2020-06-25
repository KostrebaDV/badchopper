export const parseUrl = (url: string, separator: string = '/') => {
    const parsedUrl = url.split(separator);
    parsedUrl.shift();

    return {
        baseRoute: parsedUrl[0],
        id: parsedUrl[1],
    };
};
