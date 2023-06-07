use wiki;

CREATE TABLE sex(
    sexID INT AUTO_INCREMENT,
    Description VARCHAR(100),
    PRIMARY KEY (sexID)
);

INSERT INTO Sex(Description) VALUES('Masculino');
INSERT INTO Sex(Description) VALUES('Femenino');

CREATE TABLE User(
    userID INT AUTO_INCREMENT,
    sexID INT NOT NULL,
    mail VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    PRIMARY KEY (userID),
    UNIQUE (mail),
    FOREIGN KEY (sexID) REFERENCES sex(sexID)
);


CREATE TABLE editorial(
    editorialID INT AUTO_INCREMENT,
    editorial VARCHAR(255) NOT NULL,
    PRIMARY KEY (editorialID)
);

INSERT INTO editorial(editorial) VALUES('MARVEL');
INSERT INTO editorial(editorial) VALUES('DC Comics');

CREATE TABLE comic(
    comicID INT AUTO_INCREMENT,
    userID INT NOT NULL,
    comic VARCHAR(255) NOT NULL,
    editorialID INT NOT NULL,
    year VARCHAR(4) NOT NULL,
    synopsis TEXT NOT NULL,
    PRIMARY KEY (comicID),
    FOREIGN KEY (editorialID) REFERENCES editorial(editorialID),
    FOREIGN KEY (userID) REFERENCES user(userID)
);

select * from editorial;