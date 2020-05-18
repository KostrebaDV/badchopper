import { toNumber } from "../helpers/toNumber";

export const normalizeAssistanceData = (assistanceDTO) => {
    const {
        id,
        name,
        description,
        price
    } = assistanceDTO;

    const normalizePrice = toNumber(price);

    if (id) {
        return {
            id,
            name,
            description,
            price: normalizePrice
        }
    }

    return {
        name,
        description,
        price: normalizePrice
    }
};
