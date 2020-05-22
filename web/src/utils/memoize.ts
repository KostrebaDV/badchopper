export const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        const n = args[0];

        if (n in cache) {
            console.log('cache');
            return cache[n];
        }

        console.log('new result');
        cache[n] = fn(n);
        return fn(n);
    };
};
