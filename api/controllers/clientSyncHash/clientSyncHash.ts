import {Router, Request, Response, Application} from 'express';

import CONST from "./const"
import {getClientSyncHashService} from '../../services/clientSyncHash/clientSyncHash';

const serviceRouter = Router();

export default (app: Application, client) => {
    serviceRouter.get(CONST.GET_SYNC, (req: Request, res: Response) => {
        getClientSyncHashService(client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("hash was not send");
            });
    });

    app.use(CONST.BASE_ROUTE, serviceRouter);
};
