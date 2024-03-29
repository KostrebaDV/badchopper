import {
    addAssistanceModel,
    deleteAssistanceModel,
    getAllAssistanceModel,
    updateAssistanceModel
} from '../../models/assistance/assistance'

import {
    AssistanceDTOType,
    AssistancesDTOType
} from "../../types/assistanceTypes";

import {
    documentIdType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType
} from "../../types/general";

import { normalizeAssistanceData } from "../../utils/assistance/normalizeAssistanceData"
import {getImageService} from '../media/media';
import {updateClientSyncHashService} from '../clientSyncHash/clientSyncHash';

const addAssistanceService = (assistanceDTO, client) => {
    if (assistanceDTO.name.length !== 0) {
        const normalizeAssistanceDTO: AssistanceDTOType = normalizeAssistanceData(assistanceDTO);

        return addAssistanceModel(normalizeAssistanceDTO, client)
            .then(() => updateClientSyncHashService(client));
    }
};

const getAllAssistanceService = async (client) => {
    const assistance = await getAllAssistanceModel(client)
        .then((data: AssistancesDTOType) => data);

    return Promise.all(assistance.map(async (assistance) => {

        const image = await getImageService(assistance.imageId, client).then(image => image);

        return {
            image,
            ...assistance
        }
    }));
};

const updateAssistanceService = (updateAssistanceDTO, client) => {
    if (updateAssistanceDTO.id.length !== 0) {
        const normalizeAssistanceDTO: AssistanceDTOType = normalizeAssistanceData(updateAssistanceDTO);

        return updateAssistanceModel(normalizeAssistanceDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
                    updateClientSyncHashService(client)

                    return status.value
                }

                throw Error('Assistance was not updated')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Assistance id is required')
    }
};

const deleteAssistanceService = (deleteAssistanceDTO: documentIdType, client) => {
    if (deleteAssistanceDTO.id.length !== 0) {
        return deleteAssistanceModel(deleteAssistanceDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.deletedCount !== 0) {
                    updateClientSyncHashService(client)

                    return 'Assistance was deleted successfully'
                }

                throw Error('Assistance was not deleted')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Assistance id is required')
    }
};

export {
    addAssistanceService,
    updateAssistanceService,
    deleteAssistanceService,
    getAllAssistanceService
}
