import {
    addCommentModel,
    deleteCommentModel,
    getAllCommentsModel,
    updateCommentModel
} from '../../models/comments/comments'
import {
    documentIdType,
    deleteDocumentResponseStatusType,
    updateDocumentResponseStatusType
} from "../../types/general";
import {getDate} from '../../utils/helpers/getDate';
import {CommentsResponseDTOType, CommentsDTOType} from '../../types/commentsTypes';
import {getImageService} from '../media/media';
import {normalizeImage} from '../../utils/staff/normalizeImage';

const addCommentService = (commentDTO, client) => {
    if (commentDTO.name.length !== 0) {

        return addCommentModel({...commentDTO, creationDate: getDate(),}, client)
            .then((data: CommentsResponseDTOType) => {
                return getImageService(data.ops[0].imageId, client)
                    .then(image => {
                        return {
                            image: normalizeImage(image),
                            ...data.ops[0]
                        }
                    });
            });
    }
};

const getAllCommentsService = async (client) => {
    const comments = await getAllCommentsModel(client)
        .then((data: CommentsDTOType) => data);

    return Promise.all(comments.map(async (item) => {
        const image = await getImageService(item.imageId, client).then(image => image);

        return {
            image: normalizeImage(image),
            ...item
        }
    }));
};

const updateCommentService = (updateCommentDTO, client) => {
    if (updateCommentDTO.id.length !== 0) {

        return updateCommentModel(updateCommentDTO, client)
            .then((status: updateDocumentResponseStatusType) => {
                if (status.ok === 1) {
                    return getImageService(status.value.imageId, client)
                        .then(image => {
                            return {
                                image: normalizeImage(image),
                                ...status.value
                            }
                        });
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

const deleteCommentService = (deleteCommentDTO: documentIdType, client) => {
    if (deleteCommentDTO.id.length !== 0) {
        return deleteCommentModel(deleteCommentDTO, client)
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
