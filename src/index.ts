import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import {Response , Express } from 'express';
//import cookieParser from 'cookie-parser';
//import { user_routes } from '../routes';
import { EmployeeRoute } from '../router';
const app : Express = express();
const allowedOrigins : string  = "*";
const corsOptions = {
    origin : allowedOrigins ,
    methods : "GET,POST,PUT,PATCH,HEAD,DELETE",
    credentials : true ,
    optionsSuccessStatus : 200

}
app.use(express.json());
app.use(cors(corsOptions));
app.use(EmployeeRoute.BASE , EmployeeRoute.router);
//app.use(cookieParser());
//app.use(user_routes.BASE_ROUTE , user_routes.router);
const PORT = process.env.PORT || 6969 ;

app.get('/' , (_ , res : Response) => { res.status(200).json({msg : 'working.....'}) });

app.listen(PORT , () => { console.log(`[app_server]: i am running at http//:localhost/${PORT}`) });


module.exports = app;



