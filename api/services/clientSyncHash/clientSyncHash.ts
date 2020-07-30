import {
    setClientSyncHashModel,
    deleteClientSyncHashModel,
    getClientSyncHashModel
} from '../../models/clientSyncHash/clientSyncHash';
import {uuidv4} from '../../utils/helpers/uuidv4';


export const updateClientSyncHashService = (client) => {
    const hash = uuidv4();

    return deleteClientSyncHashModel(client)
        .then(() => setClientSyncHashModel(hash, client))
};

export const getClientSyncHashService = (client) => {
    return getClientSyncHashModel(client)
};
