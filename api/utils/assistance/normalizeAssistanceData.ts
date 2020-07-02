import { toNumber } from "../helpers/toNumber";

export const normalizeAssistanceData = (assistanceDTO) => {
    const {
        id,
        name,
        description,
        price,
        imageId
    } = assistanceDTO;

    const normalizePrice = toNumber(price);

    if (id) {
        return {
            id,
            name,
            description,
            imageId,
            price: normalizePrice
        }
    }

    return {
        name,
        description,
        imageId,
        price: normalizePrice
    }
};
