import express, { Application } from 'express';
import { expressClient, mongoClient } from "./loaders";

require('dotenv').config();

const PORT = process.env.API_CONNECTION_PORT;
const DB_PORT = process.env.DB_CONNECTION_PORT;

function startServer() {
    const expressApp: Application = express();

    expressApp.listen(PORT, err => {
        if (!err) {
            mongoClient
                .then(client => {
                    expressClient(expressApp, client);

                    console.log(`Mongo start on port: ${DB_PORT}`);
                    console.log(`Server listening on port: ${PORT}`);
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            process.exit(1);
            return;
        }
    });
}

startServer();
