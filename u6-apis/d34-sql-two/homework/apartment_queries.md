<!-- #1 -->
SELECT * FROM tenants;
<!-- #2 -->
SELECT name, age, gender FROM tenants;
<!-- #3 -->
SELECT * FROM tenants WHERE age>65;
<!-- #4 -->
SELECT * FROM tenants WHERE apartment_id = 20;
<!-- #5 -->
SELECT * FROM tenants WHERE apartment_id = 20 or apartment_id = 21;
<!-- #6 -->
DELETE FROM tenants WHERE age>65;
<!-- #7 -->
UPDATE doormen SET shift = 'Night' WHERE shift = 'Day' AND building_id = 3;
<!-- #8 -->
INSERT INTO tenants (name, age, gender, apartment_id) VALUES ('Richard Wang', 28, 'Male', 1);
<!-- #9 -->
SELECT id FROM apartments WHERE building_id = 2;
<!-- #10 -->
SELECT * FROM apartments WHERE building_id = 3 AND price > 2300;
<!-- #11 -->
TRICK QUESTION.  We killed off everyone above 65 in #6.
<!-- #12 -->
UPDATE tenants SET age = age+1;
<!-- #13 -->
SELECT * FROM tenants, apartments WHERE tenants.apartment_id = apartments.id AND apartments.price > 2300;
<!-- #14 -->
SELECT * FROM doormen LEFT JOIN buildings ON doormen.building_id = buildings.id;
<!-- #15 -->
SELECT * FROM buildings INNER JOIN apartments ON apartments.building_id = buildings.id;
<!-- #16 -->
SELECT * FROM apartments LEFT JOIN tenants ON tenants.apartment_id = apartments.id;
