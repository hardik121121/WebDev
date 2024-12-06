CREATE DATABASE IF NOT EXISTS ap;
USE ap;

CREATE TABLE IF NOT EXISTS Student (
    sID INT PRIMARY KEY,
    sName VARCHAR(50),
    GPA FLOAT,
    sizeHS INT NOT NULL
);

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('123', 'Amy', '3.9', '1000');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('234', 'Bob', '3.6', '1500');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('345', 'Craig', '3.5', '500');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('456', 'Doris', '3.9', '1000');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('567', 'Edward', '2.9', '2000');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('678', 'Fay', '3.8', '200');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('789', 'Gary', '3.4', '800');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('987', 'Helen', '3.7', '800');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('876', 'Irene', '3.9', '400');

INSERT INTO student(sID, sName, GPA, sizeHS) VALUES ('765', 'Jay', '2.9', '1500');

INSERT INTO student (sID, sName, GPA, sizeHS) VALUES ('654', 'Amy', '3.9', '1000');

INSERT INTO student (sID, sName, GPA, sizeHS) VALUES ('543', 'Craig', '3.4', '2000');

SELECT * FROM student;

CREATE TABLE IF NOT EXISTS College(
    cName VARCHAR(50) PRIMARY KEY,
    State VARCHAR(50),
    enrollment INT NOT NULL
);

INSERT INTO college(cName, State, enrollment) VALUES('Stanford', 'CA', '15000');

INSERT INTO college(cName, State, enrollment) VALUES('Berkeley', 'CA', '36000');

INSERT INTO college(cName, State, enrollment) VALUES('MIT', 'MA', '10000');

INSERT INTO college(cName, State, enrollment) VALUES('Cornell', 'NY', '21000');

INSERT INTO college(cName, State, enrollment) VALUES('Harvard', 'MA', '50040');

SELECT * FROM college;

CREATE TABLE IF NOT EXISTS Applied(
    sID INT NOT NULL,
    cName VARCHAR(50) NOT NULL,
    major VARCHAR(50) NOT NULL,
    decision VARCHAR(1) NOT NULL
);

INSERT INTO Applied(sID, cName, major, decision) VALUES('123', 'Stanford', 'CS', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('123', 'Stanford', 'EE', 'N');

INSERT INTO Applied(sID, cName, major, decision) VALUES('123', 'Berkeley', 'CS', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('123', 'Cornell', 'EE', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('234', 'Berkeley', 'biology', 'N');

INSERT INTO Applied(sID, cName, major, decision) VALUES('345', 'MIT', 'bioengineering', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('345', 'Cornell', 'bioengineering', 'N');

INSERT INTO Applied(sID, cName, major, decision) VALUES('345', 'Cornell', 'CS', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('345', 'Cornell', 'EE', 'N');

INSERT INTO Applied(sID, cName, major, decision) VALUES('678', 'Stanford', 'history', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('987', 'Stanford', 'CS', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('987', 'Berkeley', 'CS', 'Y');

INSERT INTO Applied(sID, cName, major, decision) VALUES('876', 'Stanford', 'CS', 'N');

INSERT INTO Applied(sID, cName, major, decision) VALUES('876', 'MIT', 'biology', 'Y');

INSERT INTO applied(sID, cName, major, decision) VALUES('876', 'MIT', 'marine biology', 'N');

INSERT INTO Applied(sID, cName, major, decision) VALUES('765', 'Stanford', 'history', 'Y');

INSERT INTO applied(sID, cName, major, decision) VALUES('765', 'Stanford', 'history', 'N');

INSERT INTO applied(sID, cName, major, decision) VALUES('765', 'Cornell', 'history', 'N');

INSERT INTO applied(sID, cName, major, decision) VALUES('765', 'Cornell', 'psychology', 'Y');

INSERT INTO applied(sID, cName, major, decision) VALUES('543', 'MIT', 'CS', 'N');

SELECT * FROM applied;

SELECT DISTINCT s.sID, s.sName
FROM Student s
JOIN Applied a ON s.sID = a.sID
WHERE a.major = 'CS';

SELECT sID, sName
FROM Student
WHERE sizeHS = (SELECT sizeHS FROM Student WHERE sID = '765') AND sID != '765';

SELECT sID, sName
FROM Student
WHERE sizeHS = (SELECT sizeHS FROM Student WHERE sID = '765') AND sID != '765';

SELECT sID, sName, GPA
FROM Student
WHERE GPA != (SELECT GPA FROM Student WHERE sName = 'Irene');

SELECT DISTINCT cName
FROM Applied
WHERE sID IN (SELECT sID FROM Student WHERE sName LIKE 'J%');

SELECT DISTINCT major
FROM Applied
WHERE sID = (SELECT sID FROM Student WHERE sName = 'Irene');

SELECT DISTINCT a.sID, a.major
FROM Applied a
WHERE a.major IN (SELECT DISTINCT major FROM Applied WHERE sID = (SELECT sID FROM Student WHERE sName = 'Irene'));

SELECT DISTINCT a.sID, a.major
FROM Applied a
WHERE a.major IN (SELECT DISTINCT major FROM Applied WHERE sID = (SELECT sID FROM Student WHERE sName = 'Irene'))
AND a.sID != (SELECT sID FROM Student WHERE sName = 'Irene');

SELECT COUNT(DISTINCT cName) AS NumColleges
FROM Applied
WHERE sID = '765';

SELECT sID
FROM Applied
GROUP BY sID
HAVING COUNT(DISTINCT cName) >= (SELECT COUNT(DISTINCT cName) FROM Applied WHERE sID = '765');

SELECT sID, sName, GPA, sizeHS
FROM Student
WHERE sID IN (
    SELECT DISTINCT a.sID
    FROM Applied a
    WHERE a.major = 'CS'
)
AND sID NOT IN (
    SELECT DISTINCT a.sID
    FROM Applied a
    WHERE a.major = 'EE'
)
AND sID IN ('987', '876', '543');

SELECT cName, State
FROM College c1
WHERE EXISTS (
    SELECT 1
    FROM College c2
    WHERE c1.State = c2.State
    AND c1.cName != c2.cName
)
AND cName != 'Cornell';

SELECT cName, enrollment
FROM College
WHERE enrollment = (SELECT MAX(enrollment) FROM College);

SELECT sName
FROM Student
WHERE GPA = (SELECT MIN(GPA) FROM Student);

SELECT major, COUNT(*) AS popularity
FROM Applied
GROUP BY major
ORDER BY popularity DESC
LIMIT 1;

SELECT sID, sName, sizeHS
FROM Student
WHERE sizeHS != (SELECT MIN(sizeHS) FROM Student);

insert into Applied  
select s1.sID, 'Berkeley', 'CSE', 'Y'  
from Student s1 
where s1.sID IN (select s.sID from Student s 
MINUS 
select a.sID from Applied a where a.cName = 'Berkeley');

SELECT sID
FROM Student
EXCEPT
SELECT sID
FROM Applied
WHERE cName = 'Stanford';

SELECT sID
FROM Applied
WHERE cName = 'Stanford'
INTERSECT
SELECT sID
FROM Applied
WHERE cName = 'Berkeley';

SELECT sName AS Name
FROM Student
UNION
SELECT cName AS Name
FROM College;

-- Create the ApplicationInfo table
CREATE TABLE ApplicationInfo (
    sID INT,
    sName VARCHAR(10),
    number_of_applications INT
);

-- Populate the ApplicationInfo table with data
INSERT INTO ApplicationInfo (sID, sName, number_of_applications)
SELECT s.sID, s.sName, COUNT(a.sID) AS number_of_applications
FROM Student s
LEFT JOIN Applied a ON s.sID = a.sID
GROUP BY s.sID, s.sName;

-- Insert data for students who have not applied
INSERT INTO ApplicationInfo (sID, sName, number_of_applications)
SELECT sID, sName, 0 AS number_of_applications
FROM Student
WHERE sID NOT IN (SELECT sID FROM Applied);

-- Create the ApplicationData table
CREATE TABLE ApplicationData (
    sID INT,
    cName VARCHAR(50),
    State VARCHAR(50)
);

-- Populate the ApplicationData table with data
INSERT INTO ApplicationData (sID, cName, State)
SELECT a.sID, a.cName, c.State
FROM Applied a
JOIN College c ON a.cName = c.cName;

UPDATE Applied
SET decision = 'N'
WHERE cName = 'Stanford'
AND sID IN (
    SELECT sID
    FROM Applied
    WHERE cName = 'Stanford'
    INTERSECT
    SELECT sID
    FROM Applied
    WHERE cName = 'Berkeley'
);

DELETE FROM Applied
WHERE cName IN (
    SELECT cName
    FROM College
    WHERE City = 'New York'
);




