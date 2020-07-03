import {Router, Request, Response, Application} from 'express';

import {
    getGalleries,
    getGalleryImages,
    addGalleryService,
    deleteGalleryService,
    updateGalleryService
} from "../../services/gallery/gallery";
import CONST from "./const"
import {AssistanceResponseType} from '../../types/assistanceTypes';

const serviceRouter = Router();

export default (app: Application, client) => {
    serviceRouter.post(CONST.ADD_GALLERY, (req: Request, res: Response) => {
        addGalleryService(req.body, client)
            .then((status: AssistanceResponseType) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("gallery was not added");
            });
    });

    serviceRouter.put(CONST.UPDATE_GALLERY, (req: Request, res: Response) => {
        updateGalleryService(req.body, client)
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

    serviceRouter.get(CONST.GET_ALL_GALLERIES, (req: Request, res: Response) => {
        getGalleries(client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("error occur");
            });
    });

    serviceRouter.get(CONST.ADD_GALLERY_IMAGES, (req: Request, res: Response) => {
        getGalleryImages(req.params, client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("error occur");
            });
    });

    serviceRouter.delete(CONST.DELETE_GALLERY, (req: Request, res: Response) => {
        deleteGalleryService(req.body, client)
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

    app.use(CONST.BASE_ROUTE, serviceRouter);
};
