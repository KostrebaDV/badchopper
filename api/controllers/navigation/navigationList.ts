import {Router, Request, Response, Application} from 'express';

import {
    navigationListService,
} from "../../services/navigation/navigationList";
import CONST from "./const"

const serviceRouter = Router();

export default (app: Application, client) => {
    serviceRouter.get(CONST.GET_NAVIGATION_LIST, (req: Request, res: Response) => {
        navigationListService(client)
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

    app.use(CONST.BASE_ROUTE, serviceRouter);
};
