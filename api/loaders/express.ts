import * as bodyParser from "body-parser";
const cors = require('cors');
import express, { Request, Response } from 'express';
import corsConfig from '../config/cors';
import departmentsController from '../controllers/departments/departments';
import mediaController from '../controllers/media/media';
import assistanceController from '../controllers/assistance/assistance';
import navigationListController from '../controllers/navigation/navigationList';

export const expressClient = (expressApp, client) => {
    expressApp.use(cors(corsConfig));
    expressApp.use(bodyParser.json());
    expressApp.use(express.static('public'));

    departmentsController(expressApp, client);
    mediaController(expressApp, client);
    assistanceController(expressApp, client);
    navigationListController(expressApp, client);

    /// catch 404 and forward to error handler
    expressApp.use((req: Request, res: Response, next) => {
        const err = new Error('URL/page no found');
        err['status'] = 404;
        next(err);
    });
};


