-- migrate:up
CREATE TABLE teams (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(100) UNIQUE KEY,
    village_id INT UNIQUE KEY,
    CONSTRAINT village_team_village_id_fkey FOREIGN KEY (village_id) REFERENCES villages(id)
);

-- migrate:down


