import {
    addCommentModel,
    deleteCommentModel,
    getAllCommentsModel,
    updateCommentModel
} from '../../models/comments/comments'

import {
    AssistanceDTOType,
} from "../../types/assistanceTypes";

import {
    documentIdType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType
} from "../../types/general";

import { normalizeAssistanceData } from "../../utils/assistance/normalizeAssistanceData"

const addCommentService = (assistanceDTO, client) => {
    if (assistanceDTO.name.length !== 0) {
        const normalizeAssistanceDTO: AssistanceDTOType = normalizeAssistanceData(assistanceDTO);

        return addCommentModel(normalizeAssistanceDTO, client)
    }
};

const getAllCommentsService = (client) => {
    return getAllCommentsModel(client)
};

const updateCommentService = (updateAssistanceDTO, client) => {
    if (updateAssistanceDTO.id.length !== 0) {
        const normalizeAssistanceDTO: AssistanceDTOType = normalizeAssistanceData(updateAssistanceDTO);

        return updateCommentModel(normalizeAssistanceDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
                    console.log(status);
                    return status.value
                }

                throw Error('Comments was not updated')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Comments id is required')
    }
};

const deleteCommentService = (deleteAssistanceDTO: documentIdType, client) => {
    if (deleteAssistanceDTO.id.length !== 0) {
        return deleteCommentModel(deleteAssistanceDTO, client)
            .then((status: deleteDocumentResponseStatusType) => {
                if (status.deletedCount !== 0) {
                    return 'Comments was deleted successfully'
                }

                throw Error('Comments was not deleted')
            })
            .catch(error => {
                throw Error(error)
            });
    } else {
        throw new Error('Comments id is required')
    }
};

export {
    addCommentService,
    updateCommentService,
    deleteCommentService,
    getAllCommentsService
}
