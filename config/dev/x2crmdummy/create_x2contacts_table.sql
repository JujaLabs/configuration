CREATE TABLE IF NOT EXISTS x2crm.x2_contacts (
    id int(10) NOT NULL AUTO_INCREMENT,
    name varchar(255) NULL,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    skype varchar(32) DEFAULT NULL,
    lastUpdated bigint(20) DEFAULT NULL,
    c_gmail varchar(255) DEFAULT NULL,
    c_slack varchar(255) DEFAULT NULL,
    c_isStudent tinyint(1) DEFAULT 0,
    c_uuid varchar(255) DEFAULT NULL,
    assignedTo varchar(50) DEFAULT NULL,
    visibility  int(11) DEFAULT NULL,
    PRIMARY KEY(id)
);


INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid, assignedTo, visibility) VALUES('Alex','Alex','BatmanNew','Alex',50,'alex@gmail.com','@batman',1,'00000000-0000-0001-0000-000000000002','Anyone',1);
INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid, assignedTo, visibility) VALUES('Max','Max','Ironman','max.ironman',200,'max@gmail.com','@max',1,'00000000-0000-0001-0000-000000000003','Anyone',1);
INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid, assignedTo, visibility) VALUES('Sergey','SergeyUpdate','Spiderman','sergey.spiderman',10,'sergey@gmail.com','@spiderman',1,'00000000-0000-0001-0000-000000000004','Anyone',1);
INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid, assignedTo, visibility) VALUES('Apex','Sergey','Apex','apea.spiderman',1000,'apex@gmail.com','@apex',1,'00000000-0000-0001-0000-000000000005','Anyone',1);
INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid, assignedTo, visibility) VALUES('NewUserWithOutUpdateName','NewUserWithOutUpdateFirstName','NewUserWithOutUpdateLastName','NewUserWithOutUpdateSkype',500,'NewUserWithOutUpdateGmail@gmail.com','@NewUserWithOutUpdateSlack',1,'00000000-0000-0001-0000-0000000000010','Anyone',1);