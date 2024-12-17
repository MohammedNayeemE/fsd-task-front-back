create table employees 
(
	emp_id varchar(255) PRIMARY KEY ,
	emp_name varchar(255) not null , 
	emp_email varchar(255) unique not null,
	emp_phone_number char(10) unique , 
	emp_dep varchar(255) , 
	emp_role varchar(255) , 
	emp_doj varchar(255)

);
