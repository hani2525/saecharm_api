-- migrate:up

CREATE TABLE villages (
    id INT NOT NULL PRIMARY KEY,
    village_name VARCHAR(100) NOT NULL,
    elder VARCHAR(100) NOT NULL
);

-- migrate:down

