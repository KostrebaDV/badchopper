import {Router, Application, Request, Response} from 'express';
import nodemailer from 'nodemailer';
import CONST from "./const"
import feedbackTemplate from './templates/feedback';
import memberShipTemplate from './templates/memberShip';
import validate from './validate';
require('dotenv').config()

const mailRouter = Router();
const GMAIL_SERVICE_HOST = process.env.GMAIL_SERVICE_HOST;
const GMAIL_SERVICE_SECURE = process.env.GMAIL_SERVICE_SECURE;
const GMAIL_SERVICE_PORT = process.env.GMAIL_SERVICE_PORT;
const GMAIL_USER_NAME = process.env.GMAIL_USER_NAME;
const GMAIL_USER_PASSWORD = process.env.GMAIL_USER_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: GMAIL_SERVICE_HOST,
    port: GMAIL_SERVICE_PORT,
    secure: GMAIL_SERVICE_SECURE,
    auth: {
        user: GMAIL_USER_NAME,
        pass: GMAIL_USER_PASSWORD
    }
});

export default (app: Application) => {
    mailRouter.post(CONST.FEEDBACK, validate, (req: Request, res: Response) => {
        const mailBody = feedbackTemplate(req.body)

        transporter.sendMail({
            from: 'Badchopper.com.ua',
            to: GMAIL_USER_NAME,
            subject: 'Отзыв с сайта',
            text: 'Отзыв был отправлн с сайта badchopper.com.ua',
            html: mailBody
        })
            .then(() => {
                return res
                    .status(200)
                    .send("feedback send");
        })
            .catch(() => {
                return res
                    .status(500)
                    .send("feedback not send");
            });
    });

    mailRouter.post(CONST.MEMBERSHIP, validate, (req: Request, res: Response) => {
        const mailBody = memberShipTemplate(req.body)

        transporter.sendMail({
            from: 'Badchopper.com.ua',
            to: GMAIL_USER_NAME,
            subject: 'Заявка на работу',
            text: 'Заявка былa отправлнa с сайта badchopper.com.ua',
            html: mailBody
        })
            .then(() => {
                return res
                    .status(200)
                    .send("feedback send");
            })
            .catch(() => {
                return res
                    .status(500)
                    .send("feedback not send");
            });
    });

    app.use(CONST.BASE_ROUTE, mailRouter);
};
