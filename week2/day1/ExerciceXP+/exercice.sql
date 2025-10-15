create database bootcamp;


create table students(
id SERIAL primary key,
first_name varchar(100),
last_name varchar(100),
birth_date date
);

INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Scott', '1987-07-27'),
('Amelia', 'Green', '1996-04-07'),
('David', 'Johnson', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

INSERT INTO students (first_name, last_name, birth_date) VALUES
('Ikram', 'Habib ALLAH', '1999-09-06');

select * from students;
select first_name, last_name from students;
select first_name, last_name from students where id=2;
select first_name, last_name from students where last_name ='Benichou' AND first_name ='Marc' ;
select first_name, last_name from students where last_name ='Benichou' OR first_name ='Marc' ;
select first_name, last_name from students where first_name like 'a%';
select first_name, last_name from students where first_name like '%a';
select first_name, last_name from students where left(right(first_name, 2),1)='a';
select first_name, last_name from students where id between 1 and 3;
select first_name, last_name from students where birth_date >='2000/01/01';


