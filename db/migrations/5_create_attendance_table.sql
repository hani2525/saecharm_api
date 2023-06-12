-- migrate:up
CREATE TABLE attendance_table (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    newbie_id INT,
    orientation TIMESTAMP NULL,
    first_class TIMESTAMP NULL,
    second_class TIMESTAMP NULL,
    third_class TIMESTAMP NULL,
    fourth_class TIMESTAMP NULL,
    settled_date TIMESTAMP NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT newbie_attendace_table_newbie_id_fkey FOREIGN KEY (newbie_id) REFERENCES newbies(id)
);

-- migrate:down

