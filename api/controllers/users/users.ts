import {Router, Request, Response, Application} from 'express';

import {
    addUserService,
    loginUserService,
    logoutUserService
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

    serviceRouter.post(CONST.ADD_SUPER_USER, (req: Request, res: Response) => {
        addUserService(req.body, client)
            .then(() => {
                return res
                    .status(200)
                    .send("Admin was added");
            })
            .catch(response => {
                return res
                    .status(response.status)
                    .send(response.msg);
            });
    });

    serviceRouter.post(CONST.LOGIN_USER, (req: Request, res: Response) => {
        loginUserService(req.body, client)
            .then((response: any) => {
                return res
                    .status(response.status)
                    .header('Authorization', 'Bearer '+ response.accessToken)
                    .header('RefreshToken', 'Bearer '+ response.refreshToken)
                    .send('Authorization successful');
            })
            .catch((e) => {
                return res
                    .status(e.status)
                    .send(e.msg);
            });
    });

    serviceRouter.post(CONST.LOGOUT_USER, (req: Request, res: Response) => {
        logoutUserService(req, client)
            .then((response: any) => {
                return res
                    .status(response.status)
                    .send(response);
            })
            .catch((e) => {
                return res
                    .status(e.status)
                    .send(e.msg);
            });
    });

    app.use(CONST.BASE_ROUTE, serviceRouter);
};
