import {Router, Request, Response, Application} from 'express';

import {
    addCommentService,
    getAllCommentsService,
    updateCommentService,
    deleteCommentService
} from "../../services/comments/comments";
import CONSTS from "./consts"
import {CommentDTOItemType} from '../../types/commentsTypes';
import {checkAuthenticated} from '../../middlewares/checkAuthenticated';

const commentsRouter = Router();

export default (app: Application, client) => {
    commentsRouter.post(CONSTS.ADD_COMMENT, checkAuthenticated, (req: Request, res: Response) => {
        addCommentService(req.body, client)
            .then((status: CommentDTOItemType) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("comment was not added");
            });
    });

    commentsRouter.get(CONSTS.GET_ALL_COMMENTS, (req: Request, res: Response) => {
        getAllCommentsService(client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch((e) => {
                return res
                    .status(500)
                    .send("error occur");
            });
    });

    commentsRouter.put(CONSTS.UPDATE_COMMENT, checkAuthenticated, (req: Request, res: Response) => {
        updateCommentService(req.body, client)
            .then(status => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch((error) => {
                return res
                    .status(500)
                    .send(error.message);
            });
    });

    commentsRouter.delete(CONSTS.DELETE_COMMENT, checkAuthenticated, (req: Request, res: Response) => {
        deleteCommentService(req.body, client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch((error) => {
                return res
                    .status(500)
                    .send(error.message);
            });
    });

    app.use(CONSTS.BASE_ROUTE, commentsRouter);
};
