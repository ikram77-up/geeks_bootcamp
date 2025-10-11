select  * from film where rating='G' OR rating='PG';
select rating,count(*) from film Group by rating;
select  * from film where rating='G' OR rating='PG-13';
select  * from film where rating='G' OR rating='PG-13' and rental_duration< 3 and rental_rate< 3.00 order by title asc;
update customer set first_name='Oumaima' where customer_id=1;
update address set address='Casa' 
From customer 
where  customer_id=1;