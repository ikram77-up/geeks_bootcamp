
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
);
INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab

-- 1
 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id
	NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--Le SecondTab.id contient la valeur NULL : resultat → 0

-- 2
	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id
	NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--id = 5 existe
--Total des lignes de FirstTab sauf id = 5

-- 3
	SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--le SecondTab.id contient la valeur NULL → resultat → 0

-- 4
	 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id 
	NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--Le COUNT(*) renverra le nombre de lignes de FirstTab 
--dont l’id n’existe pas dans SecondTab (en excluant les NULL de SecondTab).