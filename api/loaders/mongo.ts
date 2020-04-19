import { MongoClient } from "mongodb"
require('dotenv').config();

const DB_PORT = process.env.DB_CONNECTION_PORT;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

const mongoClient = new MongoClient(
    `${DB_CONNECTION_STRING}:${DB_PORT}`,
    {
        useNewUrlParser: true
    }
);

const client = new Promise((resolve, reject) => {
    mongoClient.connect((err, client) => {
        if (client?.isConnected()) {
            resolve(client.db("badchopper_db"))
        } else {
            reject("Not DB Connected!");
        }
    });
});

export { client };

