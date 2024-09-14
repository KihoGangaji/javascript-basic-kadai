CREATE TABLE IF NOT EXISTS shops (
     shop_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     shop_name VARCHAR(50) NOT NULL,  
     image_name VARCHAR(255),
     description VARCHAR(255) NOT NULL,
     price INT NOT NULL,
     reserve_cnt INT NOT NULL,
     address VARCHAR(255) NOT NULL,
     phone_number VARCHAR(50) NOT NULL,
     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
     updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     category_id INT
     );