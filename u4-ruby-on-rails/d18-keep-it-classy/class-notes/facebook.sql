DROP DATABASE IF EXISTS facebook;
CREATE DATABASE facebook;
\c facebook

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  birth_date DATE NULL,
  friends_count INTEGER NULL,
  city VARCHAR NULL
);
INSERT INTO people (first_name, last_name)
VALUES ('Jim', 'Jones');

INSERT INTO people (first_name, last_name, friends_count)
VALUES ('Sue', 'Smith', 12);

INSERT INTO people (first_name, last_name, birth_date)
VALUES('Jil', 'Nance', '2003-1-1');

INSERT INTO people (first_name, last_name, birth_date, friends_count)
VALUES ('Samantha', 'Jones', '1989-4-12', 230);

SELECT * FROM people
WHERE last_name = 'Jones';

SELECT * FROM people
WHERE friends_count > 5;

UPDATE people
SET friends_count = 1
WHERE first_name = 'Jim';
