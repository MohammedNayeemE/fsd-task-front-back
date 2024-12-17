
import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { pool } from "../config/config";
import { Query } from "../queries/query";

const add_employee = async (req : Request , res : Response) => {
	const { emp_id , emp_name , emp_email , emp_phone_number , emp_dep , emp_role , emp_doj  } = req.body;

	const client = await pool.connect();

	try{	
		let msg = "";
		const find_unique_id = await client.query(Query.find_id , [emp_id]);
		if(find_unique_id.rowCount !== 0) {
			msg = "employee id already exits";
			return res.status(404).json({statusCode : 404 , msg});
		}
		const find_unique_email = await client.query(Query.find_email , [emp_email]);
		if(find_unique_email.rowCount !== 0) {
			msg = "employee email aleady exits";
			return res.status(404).json({statusCode : 404 , msg});
		}

		const find_unique_number = await client.query(Query.find_number , [emp_phone_number]);
		if(find_unique_number.rowCount !== 0) {
			msg = "phone number already exists";
			return res.status(404).json({statusCode : 404 , msg});
		}

		const add_e = await client.query(Query.add_employee , [emp_id , emp_name , emp_email , emp_phone_number , emp_dep , emp_role , emp_doj]);

		if(add_e !== null) {
			msg = "employee added sucessfully";
			return res.status(201).json({statusCode : 201 , msg});
		}



	}
	catch(err){
		console.error(err);

		return res.status(500).json({statusCode : 500 , msg : 'internal server error'});

	}


}


const MODULE = {
	add_employee
}
export default MODULE;
