import {Router, Request, Response, Application} from 'express';

import {
    addAssistanceService,
    deleteAssistanceService,
    getAllAssistanceService,
    updateAssistanceService
} from "../../services/assistance/assistance";
import CONST from "./const"
import {AssistanceResponseType} from '../../types/assistanceTypes';
import {checkAuthenticated} from '../../middlewares/checkAuthenticated';

const serviceRouter = Router();

export default (app: Application, client) => {
    serviceRouter.post(CONST.ADD_ASSISTANCE, checkAuthenticated, (req: Request, res: Response) => {
        addAssistanceService(req.body, client)
            .then((status: AssistanceResponseType) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("assistance was not added");
            });
    });

    serviceRouter.get(CONST.GET_ALL_ASSISTANCE, (req: Request, res: Response) => {
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

    serviceRouter.put(CONST.UPDATE_ASSISTANCE, checkAuthenticated, (req: Request, res: Response) => {
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

    serviceRouter.delete(CONST.DELETE_ASSISTANCE, checkAuthenticated, (req: Request, res: Response) => {
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

    app.use(CONST.BASE_ROUTE, serviceRouter);
};
