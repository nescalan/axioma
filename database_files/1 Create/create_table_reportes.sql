CREATE TABLE IF NOT EXISTS reportes(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    fecha_reporte DATE NOT NULL,
    invitado_id INT UNSIGNED NOT NULL,
    vivienda_id  INT UNSIGNED NOT NULL,
    visita_id  INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_invitado_id_reportes FOREIGN KEY(invitado_id) REFERENCES invitados(id), 
    CONSTRAINT fk_vivienda_id_reportes FOREIGN KEY(vivienda_id) REFERENCES viviendas(id),
    CONSTRAINT fk_visita_id_reportes FOREIGN KEY(visita_id) REFERENCES visitas(id)
)ENGINE=InnoDB;