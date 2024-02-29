import { MongoClient } from "mongodb"

require('dotenv').config()

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const DB_PORT = process.env.DB_CONNECTION_PORT;

const client = new MongoClient(`${DB_CONNECTION_STRING}:${DB_PORT}`);
const dbName = 'badchopper_db';

export const mongoClient = new Promise(async (resolve, reject) => {
    return await client.connect().then(() => {
        console.log('Connected successfully to server');
        return resolve(client.db(dbName));
    }).catch(() => {
        console.log('Connected successfully to server');
    })
});
