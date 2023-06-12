-- migrate:up
CREATE TABLE team_members (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    team_id INT,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(100) NOT NULL,
    birth_year int NOT NULL,
    position int NULL DEFAULT 3,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT team_team_members_team_id_fkey FOREIGN KEY (team_id) REFERENCES teams(id)
);

-- migrate:down

