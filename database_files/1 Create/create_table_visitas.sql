CREATE TABLE IF NOT EXISTS visitas(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    fecha_ingreso DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    tipo_visita VARCHAR(60) NOT NULL,
    placa_vehiculo VARCHAR(7) NOT NULL,
    numero_acompanantes INT UNSIGNED NOT NULL,
    invitado_id INT UNSIGNED NOT NULL,
    vivienda_id INT UNSIGNED NOT NULL,
    observaciones VARCHAR(300),
    PRIMARY KEY(id),
    CONSTRAINT fk_invitado_id FOREIGN KEY(invitado_id) REFERENCES invitados(id),
    CONSTRAINT fk_vivienda_id FOREIGN KEY(vivienda_id) REFERENCES viviendas(id)
)ENGINE=InnoDB;