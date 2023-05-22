SELECT 
	reportes.id AS Visita_No, 
    visitas.fecha_ingreso AS Ingreso, 
    condominos.nombre AS Residente,
    viviendas.numero_casa AS Vivienda,
    visitas.observaciones AS observaciones
FROM reportes 
INNER JOIN visitas ON reportes.visita_id = visitas.id
INNER JOIN condominos ON reportes.visita_id = condominos.id
INNER JOIN viviendas ON reportes.vivienda_id = viviendas.id
WHERE visitas.fecha_ingreso = '2024-03-10';

