CREATE DATABASE p2;

USE p2;

CREATE TABLE IF NOT EXISTS Department(
    Deptno INT PRIMARY KEY,
    Dname VARCHAR(20) UNIQUE,
    Location VARCHAR(20) NOT NULL,
    CONSTRAINT location_check CHECK (Location IN ('Delhi', 'Pune', 'Agra'))
);

CREATE TABLE IF NOT EXISTS Employee (
    Empno VARCHAR(5) PRIMARY KEY,
    Ename VARCHAR(20) UNIQUE,
    Designation VARCHAR(20) NOT NULL,
    Salary INT DEFAULT 25000,
    DOB DATE NOT NULL,
    Dno INT, 
    CONSTRAINT Ename_check CHECK (SUBSTRING(Ename, 1, 1) = 'E'),
    CONSTRAINT Salary_check CHECK (Salary BETWEEN 15000 AND 50000),
    CONSTRAINT fk_department_Dno FOREIGN KEY (Dno) REFERENCES Department(Deptno) 
);

CREATE TABLE IF NOT EXISTS Candidate(
    Candidate_ID INT PRIMARY KEY,
    Candidate_Name VARCHAR(20) NOT NULL,
    Candidate_Email VARCHAR(20) UNIQUE,
    Candidate_Dept VARCHAR(20) DEFAULT 'HR',
    Manager_Id INT,
    CONSTRAINT email_format_check CHECK (
        POSITION('@' IN Candidate_Email) > 0 AND 
        POSITION('.' IN Candidate_Email) > POSITION('@' IN Candidate_Email)
    ),
    CONSTRAINT fk_manager_candidate FOREIGN KEY (Manager_ID) REFERENCES Candidate(Candidate_ID)
);

ALTER TABLE College ADD PRIMARY KEY (cName);

ALTER TABLE Student ADD PRIMARY KEY (sID);

ALTER TABLE Apply ADD PRIMARY KEY (sID, cName, major);

ALTER TABLE Apply ADD CONSTRAINT fk_student FOREIGN KEY (sID) REFERENCES student(sID);

ALTER TABLE Apply ADD CONSTRAINT fk_college FOREIGN KEY (cName) REFERENCES college(cName);

ALTER TABLE Apply MODIFY COLUMN major VARCHAR(25);

ALTER TABLE Apply ADD COLUMN decision VARCHAR(3) NOT NULL;

ALTER TABLE Apply MODIFY COLUMN decision CHAR(1);

ALTER TABLE Apply DROP FOREIGN KEY fk_college;

ALTER TABLE Student DROP COLUMN sizeHS;

ALTER TABLE College DROP PRIMARY KEY;

ALTER TABLE Apply ADD CONSTRAINT uc_cName_major UNIQUE (cName, major);

ALTER TABLE College ADD INDEX idx_cName (cName);
ALTER TABLE Apply ADD CONSTRAINT fk_college FOREIGN KEY (cName) REFERENCES College(cName) ON DELETE CASCADE;

ALTER TABLE Student CHANGE COLUMN enrollment enroll VARCHAR(255);


CREATE TABLE IF NOT EXISTS CUSTOMER(
    CustomerId VARCHAR(6) PRIMARY KEY,
    CustomerName VARCHAR(30) NOT NULL,
    DateOfReg DATE,
    UserId VARCHAR(15) UNIQUE,
    Password VARCHAR(15) NOT NULL,
    CONSTRAINT  CustomerId_check CHECK (SUBSTRING(CustomerId, 1, 1) = 'C')

);

CREATE TABLE IF NOT EXISTS BankInfo(
    AccountNo INT,
    CustomerId VARCHAR(6),
    CONSTRAINT PK_BankInfo PRIMARY KEY (AccountNo, CustomerId),
    CONSTRAINT CustomerId_fk FOREIGN KEY(CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Billing(
    Billd INT PRIMARY KEY,
    AccountNo INT,
    CustomerId VARCHAR(6),
    BillDate DATE DEFAULT CURRENT_DATE,
    PaymentType ENUM('creditcard', 'debitcard'),
    CONSTRAINT FK_AccountNo_CustomerId FOREIGN KEY(AccountNo, CustomerId) REFERENCES BankInfo(AccountNo, CustomerId) ON DELETE CASCADE
);
INSERT INTO Billing (Billd, AccountNo, CustomerId, PaymentType) VALUES (1, 12345, 'ABCDEF', 'creditcard');


CREATE TABLE IF NOT EXISTS Item(
    ItemId VARCHAR(6) PRIMARY KEY,
    ItemName VARCHAR(30) NOT NULL,
    QtyOnHand INT CHECK (QtyOnHand > 0),
    UnitPrice INT CHECK (UnitPrice > 0),
    Class CHAR(1),
    UnitOfMeasurement VARCHAR(12),
    ReOrderLevel INT CHECK (ReOrderLevel > 0),
    ReOrderQty INT CHECK (ReOrderQty > 0),
    Discount INT,
    CONSTRAINT QtyOnHand_check CHECK(QtyOnHand > ReOrderLevel),
    CONSTRAINT Class_check CHECK(
        (Class = 'A' AND UnitPrice < 100) OR
        (Class = 'B' AND UnitPrice < 1000 AND UnitPrice >= 100) OR
        (Class = 'C' AND UnitPrice >= 1000)
    )
);


