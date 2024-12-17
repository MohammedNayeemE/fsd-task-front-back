export const Query = {
	add_employee : `insert into employees (emp_id , emp_name , emp_email , emp_phone_number , emp_dep , emp_role , emp_doj)  values ($1 , $2 , $3 , $4,  $5 , $6 , $7);`,

	find_id  : `select * from employees where emp_id = $1;`,
	find_email : `select * from employees where emp_email = $1;`,
	find_number : `select * from employees where emp_phone_number = $1;`
}
