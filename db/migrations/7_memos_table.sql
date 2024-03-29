-- migrate:up
CREATE TABLE memos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    writer_id INT,
    target_id INT,
    content VARCHAR(2000) NOT NULL,
    is_deleted BOOLEAN NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT admin_memos_writer_id_fkey FOREIGN KEY (writer_id) REFERENCES admins(id),
    CONSTRAINT newbie_memos_target_id_fkey FOREIGN KEY (target_id) REFERENCES newbies(id)
);

-- migrate:down