CREATE TABLE viviendas(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    numero_casa VARCHAR(4) NOT NULL,
    direccion VARCHAR(4) NOT NULL,
    telefono  VARCHAR(10) NOT NULL,
    estado ENUM('activo', 'inactivo') 
) ENGINE = InnoDB;
