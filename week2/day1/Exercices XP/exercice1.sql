---create database---
CREATE DATABASE public;

---create table---
CREATE Table items (
  id  SERIAL  PRIMARY KEY ,
name_item VARCHAR(80),
price INT
  
);
---create table---
CREATE TABLE costumors (id  SERIAL  PRIMARY KEY,
 name VARCHAR(100),
 lastname VARCHAR(100) 
 );

INSERT INTO items (name_item,price) VALUES ('small desk', 100),
('large desk', 300),
 ('fan', 80);
INSERT INTO customers (name, lastname)
VALUES
('Scott', 'Tiger'),
('John', 'Doe'),
('Alice', 'Smith'),
('Bob', 'Brown');

SELECT * FROM items;
SELECT * FROM costumors;    
SELECT * FROM items  WHERE price >80;
SELECT * FROM items  WHERE price < 300;
SELECT * from costumors WHERE lastname = 'Smith';
--- affiche aucun ligne car aucun costumor n'a le nom Smith---
SELECT * from costumors WHERE lastname = 'Jones';
SELECT * FROM costumors WHERE name <> 'Scott';