import {Router, Request, Response, Application} from 'express';

import {
    translationService,
} from "../../services/translations/translations";
import CONST from "./const"

const translationsRouter = Router();

export default (app: Application, client) => {
    translationsRouter.get(CONST.GET_TRANSLATIONS, (req: Request, res: Response) => {
        translationService(client)
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

    app.use(CONST.BASE_ROUTE, translationsRouter);
};
