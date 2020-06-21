export const getPublicDepartmentId = (name) => {
    return name
        .replace(/[^a-zA-Z0-9]/g, "")
        .trim();
}
