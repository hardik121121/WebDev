CREATE DATABASE kt;
CREATE DATABASE p2;

USE kt;

Create Table IF NOT EXISTS College(
    cName VARCHAR(10),
    state VARCHAR(10),
    enrollment INT PRIMARY KEY NOT NULL
);

INSERT INTO College(cName, state, enrollment) VALUES('Stanford', 'CA', '15000');

INSERT INTO College(cName, state, enrollment) VALUES('Berkeley', 'CA', '36000');

INSERT INTO College(cName, state, enrollment) VALUES('MIT', 'MA', '10000');

INSERT INTO College(cName, state, enrollment) VALUES('Cornell', 'NY', '21000');

INSERT INTO College(cName, state, enrollment) VALUES('Harvard', 'MA', '50040');

SELECT * FROM College;



Create Table IF NOT EXISTS Student(
    sID INT PRIMARY KEY,
    sName VARCHAR(10),
    GPA FLOAT,
    sizeHS INT NOT NULL,
    DoB DATE
);


INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('123', 'Amy', '3.9', '1000', '1996-06-26');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('234', 'Bob', '3.6', '1500', '1995-04-07');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('345', 'Craig', '3.5', '500', '1995-02-04');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('456', 'Doris', '3.9', '1000', '1997-07-24');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('567', 'Edward', '2.9', '2000', '1996-12-21');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('678', 'Fay', '3.8', '200', '1996-08-27');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('789', 'Gary', '3.4', '800', '1996-10-08');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('987', 'Helen', '3.7', '800', '1997-03-27');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('876', 'Irene', '3.9', '400', '1996-03-07');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('765', 'Jay', '2.9', '1500', '1998-08-08');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('654', 'Amy', '3.9', '1000', '1996-05-26');

INSERT INTO Student(sID, sName, GPA, sizeHS, DoB) VALUES('543', 'Craig', '3.4', '2000', '1998-08-27');

SELECT * FROM Student;




Create Table IF NOT EXISTS Apply(
    sID INT NOT NULL,
    cName VARCHAR(10),
    major VARCHAR(20),
    decision VARCHAR(1)
);


INSERT INTO Apply(sID, cName, major, decision) VALUES('123', 'Stanford', 'CS', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('123', 'Stanford', 'EE', 'N');

INSERT INTO Apply(sID, cName, major, decision) VALUES('123', 'Berkeley', 'CS', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('123', 'Cornell', 'EE', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('234', 'Berkeley', 'biology', 'N');

INSERT INTO Apply(sID, cName, major, decision) VALUES('345', 'MIT', 'bioengineering', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('345', 'Cornell', 'bioengineering', 'N');

INSERT INTO Apply(sID, cName, major, decision) VALUES('345', 'Cornell', 'CS', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('345', 'Cornell', 'EE', 'N');

INSERT INTO Apply(sID, cName, major, decision) VALUES('678', 'Stanford', 'history', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('987', 'Stanford', 'CS', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('987', 'Berkeley', 'CS', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('876', 'Stanford', 'CS', 'N');

INSERT INTO Apply(sID, cName, major, decision) VALUES('876', 'MIT', 'biology', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('876', 'MIT', 'marine biology', 'N');

INSERT INTO Apply(sID, cName, major, decision) VALUES('765', 'Stanford', 'history', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('765', 'Cornell', 'history', 'N');

INSERT INTO Apply(sID, cName, major, decision) VALUES('765', 'Cornell', 'psychology', 'Y');

INSERT INTO Apply(sID, cName, major, decision) VALUES('543', 'MIT', 'CS', 'N');

SELECT * FROM Apply;

SELECT sName, DoB FROM student;

SELECT sName FROM student WHERE GPA>3.7;

SELECT sName FROM student WHERE sizeHS >= 1000 AND DoB > '1996-12-31';

SELECT sName FROM student WHERE GPA >= 2.9 AND GPA <= 3.9;

SELECT * FROM college WHERE state = 'MA' ;

SELECT sName FROM student WHERE GPA >= 2.0 AND GPA <= 3.5;

SELECT sName, DoB FROM student WHERE DoB > '1996-07-01' ORDER BY DoB ASC;

SELECT sID, cName, decision FROM apply WHERE decision = 'Y';

SELECT sID,cName FROM apply WHERE cName = 'Stanford';

SELECT cName FROM college WHERE enrollment > '1000';

SELECT cName FROM college WHERE state != 'CA';

SELECT sName FROM student WHERE sizeHS > '1700' AND GPA < 3.8;

DESCRIBE student;

SELECT  DISTINCT major FROM apply;

SELECT * FROM student;

SELECT sName FROM student WHERE CHAR_LENGTH(sName) = 3;

SELECT sName FROM student WHERE sName LIKE 'H%' AND CHAR_LENGTH(sName) = 5;

SELECT sName FROM student WHERE CHAR_LENGTH(sName) >= 5 AND SUBSTRING(sName, 3, 1) = 'e' AND SUBSTRING(sName, 5, 1) = 'e';

SELECT sName FROM student WHERE RIGHT(sName , 1) = 'Y';

SELECT sName,GPA FROM student ORDER BY GPA ASC;

SELECT * FROM student ORDER BY GPA ASC , DoB DESC;

SELECT sID FROM apply WHERE cName IN ('Stanford','Cornell','MIT');

DELETE FROM apply WHERE cName = 'Stanford';
SELECT * FROM apply;

UPDATE student SET GPA = GPA + (0.10*GPA);
SELECT * FROM student;

DELETE FROM college WHERE cName = 'Stanford';

Update student SET GPA = GPA + 1.5 WHERE GPA < 3.5 AND sizeHS > 1500;
SELECT * FROM student;

DELETE FROM student WHERE GPA < 3.2;
SELECT * FROM student;

CREATE TABLE IF NOT EXISTS Dept(
    deptno INT PRIMARY KEY,
    dname VARCHAR(255),
    loc VARCHAR(255)
);

INSERT INTO Dept(deptno, dname, loc) VALUES('1', 'ACCOUNTING', 'ST LOUIS');

INSERT INTO Dept(deptno, dname, loc) VALUES('2', 'RESEARCH', 'NEW YORK');

INSERT INTO Dept(deptno, dname, loc) VALUES('3', 'SALES', 'ATLANTA');

INSERT INTO Dept(deptno, dname, loc) VALUES('4', 'OPERATIONS', 'SEATTLE');

SELECT * FROM Dept;

CREATE TABLE IF NOT EXISTS Employee(
    empno INT PRIMARY KEY,
    ename VARCHAR(255),
    job VARCHAR(255),
    mgr VARCHAR(255),
    hierdate DATE,
    sal INT NOT NULL,
    comm VARCHAR(255),
    dept INT NOT NULL
);

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('1', 'JOHNSON', 'ADMIN', '6', '1990-12-17', '18000', '(null)', '4');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('2', 'HARDING', 'MANAGER', '9', '1998-02-02', '52000', '300', '3');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('3', 'TAFT', 'SALES 1', '2', '1996-01-02', '25000', '500', '3');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('4', 'HOOVER', 'SALES 1', '2', '1990-04-02', '27000', '(null)', '3');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('5', 'LINCOLN', 'TECH', '6', '1994-06-23', '22500', '1400', '4');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('6', 'GARFIELD', 'MANAGER', '9', '1993-05-01', '54000', '(null)', '4');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('7', 'POLK', 'TECH', '6', '1997-09-27', '25000', '(null)', '4');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('8', 'GRANT', 'ENGINEER', '10', '1997-03-30', '32000', '(null)', '2');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('9', 'JACKSON', 'CEO', '(null)', '1990-01-01', '75000', '(null)', '4');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('10', 'FILLMORE', 'MANAGER', '9', '1994-08-09', '56000', '(null)', '2');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('11', 'ADAMAS', 'ENGINEER', '10', '1996-03-15', '34000', '(null)', '2');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('12', 'WASHINGTON', 'ADMIN', '6', '1998-04-16', '18000', '(null)', '4');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('13', 'MONROE', 'ENGINEER', '10', '2000-12-03', '30000', '(null)', '2');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('14', 'ROOSEVELT', 'CPA', '9', '1995-10-12', '35000', '(null)', '1');

INSERT INTO Employee(empno, ename, job, mgr, hierdate, sal, comm, dept) VALUES ('15', 'HANCOCK', 'SALES 1', '2', '1990-03-02', '27500', '(null)', '3');

SELECT * FROM employee;

SELECT ename,hierdate FROM employee ORDER BY hierdate DESC;

SELECT ename,job FROM employee ORDER BY job ASC;

SELECT ename,job FROM employee ORDER BY ename ASC;

SELECT job,ename,sal,comm FROM employee WHERE sal > '50000' ORDER BY sal DESC;

SELECT job,ename,sal,comm FROM employee WHERE comm != '(null)' ORDER BY sal DESC;

SELECT job,ename,sal,comm FROM employee WHERE SUBSTRING(ename, 1, 1) = 'H';

SELECT job,ename,sal,comm FROM employee WHERE SUBSTRING(ename, 1, 1) = 'H' AND comm = '(null)';

SELECT job,ename FROM employee WHERE dept = '3';

SELECT dname,loc FROM dept WHERE deptno = '3';

SELECT job,ename,dept,sal FROM employee ORDER BY dept ASC,sal DESC;