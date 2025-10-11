CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    quantity_purchases INT,
    customer_id INT REFERENCES customers(id),
    item_id INT REFERENCES items(id)
);

insert into purchases (quantity_purchases,customer_id,item_id) values 
(1,3,3),
(10,5,2),(2,1,1);
 select * from purchases;
  select * from purchases inner join customers on  customers.id=purchases.customer_id
    select * from purchases inner join customers on  purchases.customer_id=5
 select * from purchases inner join items on   items.id=purchases.item_id and nom='Large Desk' or nom='Small Desk'
   select I.nom,C.FirstName,C.LastName from purchases P 
   inner join customers C on  C.id=P.customer_id
   inner join items I on   I.id=P.item_id
insert into purchases (quantity_purchases,customer_id) values (1,3);
--yes we can insert without item_id because it's not required 
