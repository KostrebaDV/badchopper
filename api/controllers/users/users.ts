import {Router, Request, Response, Application} from 'express';

import {
    addUserService,
    loginUserService
} from '../../services/users/users';
import CONST from "./const"
import {checkAuthenticated} from '../../middlewares/checkAuthenticated';

const serviceRouter = Router();

export default (app: Application, client) => {
    serviceRouter.post(CONST.ADD_USER, checkAuthenticated, (req: Request, res: Response) => {
        addUserService(req.body, client)
            .then(() => {
                return res
                    .status(200)
                    .send("user was added");
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("user was not added");
            });
    });

    serviceRouter.post(CONST.LOGIN_USER, (req: Request, res: Response) => {
        loginUserService(req.body, client)
            .then((response: any) => {
                return res
                    .status(response.status)
                    .send({
                        accessToken: response.accessToken,
                        refreshToken: response.refreshToken
                    });
            })
            .catch((e) => {
                console.log(e);
                return res
                    .status(e.status)
                    .send(e.msg);
            });
    });

    app.use(CONST.BASE_ROUTE, serviceRouter);
};
