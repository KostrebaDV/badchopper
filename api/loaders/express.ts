import * as bodyParser from "body-parser";
const cors = require('cors');
import {Request, Response, Application} from 'express';
import corsConfig from '../config/cors';
import departmentsController from '../controllers/departments/departments';

const express = (app: Application, client) => {
    app.use(cors(corsConfig));
    app.use(bodyParser.json());

    departmentsController(app, client);

    /// catch 404 and forward to error handler
    app.use((req: Request, res: Response, next) => {
        const err = new Error('URL/page no found');
        err['status'] = 404;
        next(err);
    });
};

export {express};

