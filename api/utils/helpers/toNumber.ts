export const toNumber = (value) => {
    const normalizeValue = Number(value);

    return isNaN(normalizeValue) ? 0 : normalizeValue;
};
