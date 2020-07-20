import * as bodyParser from "body-parser";
const cors = require('cors');
const path = require('path');
import express from 'express';
import corsConfig from '../config/cors';
import departmentsController from '../controllers/departments/departments';
import mediaController from '../controllers/media/media';
import assistanceController from '../controllers/assistance/assistance';
import navigationListController from '../controllers/navigation/navigationList';
import staffController from '../controllers/staff/staff';
import commentsController from '../controllers/comments/comments';
import galleryController from '../controllers/gallery/gallery';
require('dotenv').config()

const EXPRESS_PUBLIC_FOLDER_PATH = process.env.EXPRESS_PUBLIC_FOLDER_PATH;

export const expressClient = (expressApp, client) => {
    expressApp.use(cors(corsConfig));
    expressApp.use(bodyParser.json());
    expressApp.use(express.static(path.join(__dirname, EXPRESS_PUBLIC_FOLDER_PATH)));
    expressApp.use(express.static(path.join(__dirname, '../../../web/build')));

    departmentsController(expressApp, client);
    mediaController(expressApp, client);
    assistanceController(expressApp, client);
    navigationListController(expressApp, client);
    staffController(expressApp, client);
    commentsController(expressApp, client);
    galleryController(expressApp, client);

    expressApp.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../../web/build/index.html'))
    })
};


