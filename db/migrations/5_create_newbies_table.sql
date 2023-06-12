-- migrate:up
CREATE TABLE newbies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    admin_id INT,
    team_id INT,
    profile_image VARCHAR(1000) NOT NULL,
    name VARCHAR(100) NOT NULL,
    first_visit TIMESTAMP NULL,
    birth_date TIMESTAMP NULL,
    is_baptized BOOLEAN NULL,
    address VARCHAR(200) NULL,
    phone_number VARCHAR(100) NOT NULL,
    guide VARCHAR(200) NULL,
    job VARCHAR(200) NULL,
    description VARCHAR(1000) NULL,
    gender VARCHAR(100) NOT NULL,
    CONSTRAINT admins_newbies_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES admins(id),
    CONSTRAINT teams_newbies_team_id_fkey FOREIGN KEY (team_id) REFERENCES teams(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- migrate:down

