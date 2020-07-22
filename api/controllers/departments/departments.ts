import {Router, Request, Response, Application} from 'express';
import {
    addDepartmentService,
    getDepartmentService,
    updateDepartmentService,
    deleteDepartmentService,
    getAddDepartmentDataService,
    getAllDepartmentsService,
    getAllDepartmentsClientService
} from "../../services/departments/departments";
import CONSTS from "./consts"
import {requestDocumetnParamsType} from "../../types/general";
import {checkAuthenticated} from '../../middlewares/checkAuthenticated';

const departmentsRouter = Router();

export default (app: Application, client) => {

    departmentsRouter.post(CONSTS.ADD_DEPARTMENT, checkAuthenticated, (req: Request, res: Response) => {
        addDepartmentService(req.body, client)
            .then(status => {
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

    departmentsRouter.put(CONSTS.UPDATE_DEPARTMENT, checkAuthenticated, (req: Request, res: Response) => {
        updateDepartmentService(req.body, client)
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

    departmentsRouter.delete(CONSTS.DELETE_DEPARTMENT, checkAuthenticated, (req: Request, res: Response) => {
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

    departmentsRouter.get(CONSTS.GET_ALL_DEPARTMENTS, checkAuthenticated, (req: Request, res: Response) => {
        getAllDepartmentsService(client)
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

    departmentsRouter.get(CONSTS.GET_ALL_DEPARTMENTS_CLIENT, (req: Request, res: Response) => {
        getAllDepartmentsClientService(client)
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

    departmentsRouter.get(CONSTS.GET_DEPARTMENT, checkAuthenticated, (req: requestDocumetnParamsType, res: Response) => {
        getDepartmentService(req.params, client)
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

    departmentsRouter.get(CONSTS.GET_ADD_DEPARTMENT_DATA, checkAuthenticated, (req: requestDocumetnParamsType, res: Response) => {
        getAddDepartmentDataService(client)
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

    app.use(CONSTS.BASE_ROUTE, departmentsRouter);
};
