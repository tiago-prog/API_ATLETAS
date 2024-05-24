import express from "express";
import cors from "cors";
import routes from './src/routes.mjs';
import dotenv from 'dotenv';

dotenv.config();

let PORT;

process.env.STATUS === 'production' 
    ? (PORT = process.env.PROD_PORT) 
    : (PORT = process.env.DEV_PORT);

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

app.listen(PORT);