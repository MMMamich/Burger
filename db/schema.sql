CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(

	id INT NOT NULL auto_increment,
	burger_name  VARCHAR(255),
    devoured BOOL DEFAULT false,
    burger_date DATETIME NOT NULL,
	PRIMARY KEY (id)
)
