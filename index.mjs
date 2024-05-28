import express from "express";
import cors from "cors";
import routes from './src/routes.mjs';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

let PORT;

process.env.STATUS === 'production' 
    ? (PORT = process.env.PROD_PORT) 
    : (PORT = process.env.DEV_PORT);

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT);