export const normalizeAssistanceData = (assistanceDTO) => {
    const {
        id,
        name,
        description,
        price,
        imageId
    } = assistanceDTO;

    if (id) {
        return {
            id,
            name,
            description,
            imageId,
            price
        }
    }

    return {
        name,
        description,
        imageId,
        price
    }
};
