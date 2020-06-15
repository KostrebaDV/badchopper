import {
    addAssistanceModel,
    deleteAssistanceModel,
    getAllAssistanceModel,
    updateAssistanceModel
} from '../../models/assistance/assistance'

import {
    AssistanceDTOType,
} from "../../types/assistanceTypes";

import {
    documentIdType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType
} from "../../types/general";

import { normalizeAssistanceData } from "../../utils/assistance/normalizeAssistanceData"

const addAssistanceService = (assistanceDTO, client) => {
    if (assistanceDTO.name.length !== 0) {
        const normalizeAssistanceDTO: AssistanceDTOType = normalizeAssistanceData(assistanceDTO);

        return addAssistanceModel(normalizeAssistanceDTO, client)
    }
};

const getAllAssistanceService = (client) => {
    return getAllAssistanceModel(client)
};

const updateAssistanceService = (updateAssistanceDTO, client) => {
    if (updateAssistanceDTO.id.length !== 0) {
        const normalizeAssistanceDTO: AssistanceDTOType = normalizeAssistanceData(updateAssistanceDTO);

        return updateAssistanceModel(normalizeAssistanceDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
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
