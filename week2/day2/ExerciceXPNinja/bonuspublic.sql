select FirstName,LastName from customers order by id desc limit 2;

delete from purchases 
USING  customers C where C.FirstName='Scott'
 select * from customers where FirstName='Scott' --yes baqi 


SELECT p.id,
       p.quantity_purchases,
       COALESCE(c.firstname, '') AS firstname,
       COALESCE(c.lastname, '')  AS lastname,
       p.item_id
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.id;
SELECT p.id,
       p.quantity_purchases,
       c.FirstName,
       c.LastName,
       p.item_id
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.id;