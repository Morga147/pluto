-- #1
SELECT * FROM players WHERE team='NYK';
--  #2
SELECT * FROM players WHERE team='IND' AND age<26;
-- #3
SELECT * FROM players ORDER BY points;
-- #4
SELECT name, points/games FROM players ORDER BY points/games DESC LIMIT 20;
-- #5
SELECT AVG(age) FROM players;
-- #6
SELECT AVG(age) FROM players WHERE team='OKC';
-- #7
SELECT AVG(age) FROM players WHERE games>40;

-- BONUS
-- #1
SELECT team, SUM(points) FROM players GROUP BY team ORDER BY SUM(points) DESC;

-- #2
SELECT age, AVG(points/games) FROM players GROUP BY age ORDER BY age DESC;
-- #3
SELECT team, COUNT(name) AS playercount FROM players WHERE points/games>12 GROUP BY team ORDER BY playercount DESC;
