export const normalizeImage = (image) => {
    return image === null ? { path: null } : {...image};
};
