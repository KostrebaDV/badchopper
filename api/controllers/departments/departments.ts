import {Router, Request, Response, Application} from 'express';

import {
    addDepartmentService,
    deleteDepartmentService
} from "../../services/departments/departments";
import CONSTS from "./consts"

const departmentsRouter = Router();

export default (app: Application, client) => {
    departmentsRouter.post(CONSTS.ADD_DEPARTMENT, (req: Request, res: Response) => {
        addDepartmentService(req.body, client)
            .then(status => {
                console.log(status);
                return res
                    .status(200)
                    .send("department added");
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("department not added");
            });
    });

    departmentsRouter.delete(CONSTS.DELETE_DEPARTMENT, (req: Request, res: Response) => {
        deleteDepartmentService(req.body, client)
            .then((status) => {
                return res
                    .status(200)
                    .send(status);
            })
            .catch(error => {
                return res
                    .status(500)
                    .send(error.message);
            });
    });

    app.use(CONSTS.BASE_DEPARTMENT_ROUTE, departmentsRouter);
};
