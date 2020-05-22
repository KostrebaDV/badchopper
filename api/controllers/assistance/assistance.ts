import {Router, Request, Response, Application} from 'express';

import {
    addAssistanceService,
    deleteAssistanceService,
    getAllAssistanceService,
    updateAssistanceService
} from "../../services/assistance/assistance";
import CONSTS from "./consts"
import {AssistanceResponseType} from '../../types/assistanceTypes';

const serviceRouter = Router();

export default (app: Application, client) => {
    serviceRouter.post(CONSTS.ADD_ASSISTANCE, (req: Request, res: Response) => {
        addAssistanceService(req.body, client)
            .then((status: AssistanceResponseType) => {
                return res
                    .status(200)
                    .send(status.ops);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("assistance was not added");
            });
    });

    serviceRouter.get(CONSTS.GET_ALL_ASSISTANCE, (req: Request, res: Response) => {
        getAllAssistanceService(client)
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

    serviceRouter.put(CONSTS.UPDATE_ASSISTANCE, (req: Request, res: Response) => {
        updateAssistanceService(req.body, client)
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

    serviceRouter.delete(CONSTS.DELETE_ASSISTANCE, (req: Request, res: Response) => {
        deleteAssistanceService(req.body, client)
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

    app.use(CONSTS.BASE_ROUTE, serviceRouter);
};
