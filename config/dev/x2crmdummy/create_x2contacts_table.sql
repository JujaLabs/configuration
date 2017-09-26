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
    PRIMARY KEY(id)
);


INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid) VALUES('Alex','Alex','Batman','Alex',100,'alex@gmail.com','@batman',1,'00000000-0000-0001-0000-000000000002');
INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid) VALUES('Max','Max','Ironman','max.ironman',200,'max@gmail.com','@max',1,'00000000-0000-0001-0000-000000000003');
INSERT INTO x2crm.x2_contacts (name,firstName,lastName,skype,lastUpdated,c_gmail,c_slack,c_isStudent,c_uuid) VALUES('Sergey','Sergey','Spiderman','sergey.spiderman',250,'sergey@gmail.com','@spiderman',1,'00000000-0000-0001-0000-000000000004');
