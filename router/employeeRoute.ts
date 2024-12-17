import * as express from "express";
import { Response, Router } from "express";
import { EmployeeController } from "../controller";


const router: Router = express.Router();

const BASE = '/employee';
router.get('/' , (_ , res : Response) => { res.status(200).json({statusCode : 200 , msg : 'this route is working'}) });
router.post('/add-employees' , EmployeeController.add_employee);


const MODULE: any = {
	BASE , router
}

export default MODULE;
