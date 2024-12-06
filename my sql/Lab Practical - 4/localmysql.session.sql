CREATE DATABASE p4;
USE p4;

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

CREATE TABLE IF NOT EXISTS Apply(
    sID INT PRIMARY KEY,
    cName VARCHAR(50) NOT NULL,
    major VARCHAR(50) NOT NULL,
    decision VARCHAR(1) NOT NULL
);

INSERT INTO apply(sID, cName, major, decision) VALUES('123', 'Stanford', 'CS', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('123', 'Stanford', 'EE', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('123', 'Berkeley', 'CS', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('123', 'Cornell', 'EE', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('234', 'Berkeley', 'biology', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('345', 'MIT', 'bioengineering', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('345', 'Cornell', 'bioengineering', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('345', 'Cornell', 'CS', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('345', 'Cornell', 'EE', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('678', 'Stanford', 'history', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('987', 'Stanford', 'CS', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('987', 'Berkeley', 'CS', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('876', 'Stanford', 'CS', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('876', 'MIT', 'biology', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('876', 'MIT', 'marine biology', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('765', 'Stanford', 'history', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('765', 'Stanford', 'history', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('765', 'Cornell', 'history', 'N');

INSERT INTO apply(sID, cName, major, decision) VALUES('765', 'Cornell', 'psychology', 'Y');

INSERT INTO apply(sID, cName, major, decision) VALUES('543', 'MIT', 'CS', 'N');


SELECT COUNT(*) AS total_students FROM Student;

SELECT AVG(GPA) AS average_gpa FROM Student;

SELECT MAX(GPA) AS max_GPA, MIN(GPA) AS min_GPA FROM Student;

SELECT COUNT(*) AS students_above_3_7 FROM Student WHERE GPA >= 3.7;

SELECT MAX(GPA) AS max_gpa, AVG(GPA) AS avg_gpa, MIN(GPA) AS min_gpa, SUM(GPA) AS total_gpa FROM Student;

SELECT COUNT(*) AS total_colleges FROM College;

SELECT COUNT(DISTINCT major) AS different_majors FROM Apply;

SELECT COUNT(*) AS total_applications FROM Apply;

SELECT AVG(DISTINCT GPA) AS avg_distinct_gpa FROM Student;

SELECT COUNT(*) AS applications_accepted FROM Apply WHERE decision = 'Y';

SELECT COUNT(*) AS students_criteria FROM Student WHERE GPA > 3.4 AND sizeHS > 1000;

SELECT COUNT(DISTINCT sID) AS students_marine_biology FROM Apply WHERE major = 'marine biology';

SELECT 
  SUM(CASE WHEN decision = 'Y' THEN 1 ELSE 0 END) AS accepted,
  SUM(CASE WHEN decision = 'N' THEN 1 ELSE 0 END) AS rejected
FROM Apply;

SELECT major, COUNT(sID) AS No_of_applications FROM Apply GROUP BY major;

SELECT cName, COUNT(*) AS applications_received FROM Apply GROUP BY cName;

SELECT cName, major, COUNT(*) AS applications_received FROM Apply GROUP BY cName, major;

SELECT cName, major FROM Apply GROUP BY cName, major HAVING COUNT(*) >= 2;

SELECT cName, COUNT(DISTINCT sID) AS no_of_applications
FROM Apply
GROUP BY cName
HAVING COUNT(DISTINCT sID) >= 3;

SELECT state, COUNT(*) AS no_of_colleges
FROM College
GROUP BY state
HAVING COUNT(*) > 1;

SELECT sName
FROM Student
GROUP BY sName
HAVING COUNT(*) > 1;

SELECT s.sID, s.sName, COALESCE(COUNT(a.sID), 0) AS no_of_applications
FROM Student s
LEFT JOIN Apply a ON s.sID = a.sID
GROUP BY s.sID;

SELECT s.sName
FROM Student s
JOIN Apply a ON s.sID = a.sID
GROUP BY s.sID
HAVING COUNT(a.sID) >= 3;

SELECT sName
FROM Student
WHERE sID NOT IN (SELECT DISTINCT sID FROM Apply);

SELECT a.cName, MAX(s.GPA) AS max_GPA, AVG(s.GPA) AS avg_GPA, MIN(s.GPA) AS min_GPA
FROM Apply a
JOIN Student s ON a.sID = s.sID
GROUP BY a.cName;

SELECT GPA, COUNT(*) AS frequency
FROM Student
GROUP BY GPA;

SELECT major, decision, COUNT(*) AS no_of_applications
FROM Apply
GROUP BY major, decision;

SELECT cName, 
ROUND((COUNT(CASE WHEN decision = 'Y' THEN 1 END) / CAST(COUNT(*) AS FLOAT)) * 100, 2) AS acceptance_rate
FROM Apply
GROUP BY cName;

