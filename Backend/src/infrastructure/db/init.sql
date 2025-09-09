CREATE TABLE IF NOT EXISTS empanadas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  filling TEXT,
  price DECIMAL(10, 2),
  is_sold_out BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO empanadas (name, type, filling, price, is_sold_out) VALUES
('Pino', 'Horno', NULL, 2500.00, FALSE),
('Queso', 'Frita', NULL, 2000.00, FALSE),
('Vegetariana', 'Horno', 'Espinaca y champiñones', 2800.00, FALSE),
('Camarón queso', 'Frita', 'Camarón y queso derretido', 3500.00, FALSE);