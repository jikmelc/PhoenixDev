
-- Insertar 10 usuarios
INSERT INTO usuarios (nombres, apellidos, nombre_usuario, fecha_nacimiento, genero, email, contraseña, latitud, longitud) VALUES
('Usuario', '1', 'usuario1', '2000-01-01', 'Masculino', 'usuario1@example.com', 'contraseña1', 19.432608, -99.133209),
('Usuario', '2', 'usuario2', '1995-04-15', 'Femenino', 'usuario2@example.com', 'contraseña2', 40.712776, -74.005974),
('Usuario', '3', 'usuario3', '1998-08-22', 'Otro', 'usuario3@example.com', 'contraseña3', 34.052235, -118.243683),
('Usuario', '4', 'usuario4', '1992-12-03', 'Femenino', 'usuario4@example.com', 'contraseña4', 51.507351, -0.127758),
('Usuario', '5', 'usuario5', '1989-06-17', 'Masculino', 'usuario5@example.com', 'contraseña5', 37.774929, -122.419418),
('Usuario', '6', 'usuario6', '1996-02-29', 'Prefiero no especificar', 'usuario6@example.com', 'contraseña6', 28.538335, -81.379236),
('Usuario', '7', 'usuario7', '1999-10-11', 'Femenino', 'usuario7@example.com', 'contraseña7', 41.878113, -87.629798),
('Usuario', '8', 'usuario8', '1987-07-04', 'Masculino', 'usuario8@example.com', 'contraseña8', 39.952583, -75.165222),
('Usuario', '9', 'usuario9', '1993-03-21', 'Otro', 'usuario9@example.com', 'contraseña9', 35.689487, 139.691706),
('Usuario', '10', 'usuario10', '1991-09-08', 'Masculino', 'usuario10@example.com', 'contraseña10', 48.856614, 2.352222);

-- Insertar 10 perfiles (uno por cada usuario)
INSERT INTO perfiles (id_usuario, biografia, foto_perfil) VALUES
(1, '¡Hola! Me encanta viajar y la fotografía.', 'perfil1.jpg'),
(2, 'Apasionado por la naturaleza y los deportes al aire libre.', 'perfil2.jpg'),
(3, 'Foodie y viajero. Buscando siempre nuevas experiencias culinarias.', 'perfil3.jpg'),
(4, 'Amante del arte y la cultura. Me gusta visitar museos y galerías.', 'perfil4.jpg'),
(5, 'Mochilero y aventurero. Recorriendo el mundo con mi cámara.', 'perfil5.jpg'),
(6, 'Disfruto de la música, el cine y los buenos libros.', 'perfil6.jpg'),
(7, 'Me gusta conocer gente nueva y aprender sobre diferentes culturas.', 'perfil7.jpg'),
(8, 'Fanático de la tecnología y los videojuegos.', 'perfil8.jpg'),
(9, 'Apasionado por el diseño y la moda.', 'perfil9.jpg'),
(10, 'Siempre en busca de nuevas aventuras y desafíos.', 'perfil10.jpg');

-- Insertar 10 publicaciones (de diferentes usuarios y tipos)
INSERT INTO publicaciones (id_usuario, tipo, privacidad, latitud, longitud) VALUES
(1, 'Sencilla', 'Publica', 19.432608, -99.133209),
(2, 'Reseña', 'Publica', 40.712776, -74.005974),
(3, 'Sencilla', 'Amigos', 34.052235, -118.243683),
(4, 'Reseña', 'Privada', 51.507351, -0.127758),
(5, 'Sencilla', 'Publica', 37.774929, -122.419418),
(6, 'Sencilla', 'Publica', 28.538335, -81.379236),
(7, 'Reseña', 'Publica', 41.878113, -87.629798),
(8, 'Sencilla', 'Amigos', 39.952583, -75.165222),
(9, 'Reseña', 'Privada', 35.689487, 139.691706),
(10, 'Sencilla', 'Publica', 48.856614, 2.352222);

-- Insertar datos en publicaciones_sencillas (para las publicaciones sencillas)
INSERT INTO publicaciones_sencillas (id_publicacion, texto) VALUES
(1, '¡Hola desde la Ciudad de México!'),
(3, 'Disfrutando de la playa en California.'),
(5, 'Un día increíble en San Francisco.'),
(6, 'Paseando por Orlando.'),
(8, 'Explorando la ciudad de Filadelfia.'),
(10, 'De visita en París.');

-- Insertar datos en reseñas (para las publicaciones tipo reseña)
INSERT INTO reseñas (id_publicacion, titulo, texto, num_estrellas) VALUES
(2, 'Reseña del restaurante "La Casa Vieja"', 'Excelente comida y servicio.', 5),
(4, 'Reseña del hotel "The Ritz"', 'Un lugar lujoso e inolvidable.', 4),
(7, 'Reseña del museo "El Prado"', 'Una colección de arte impresionante.', 5),
(9, 'Reseña del parque "Ueno"', 'Un oasis de tranquilidad en la ciudad.', 4);

-- Insertar 10 imágenes (asociadas a diferentes publicaciones)
-- INSERT INTO imagenes (id_publicacion, ruta_imagen) VALUES
-- (1, LOAD_FILE('/ruta/a/la/imagen1.jpg')),
-- (2, LOAD_FILE('/ruta/a/la/imagen2.jpg')),
-- (3, LOAD_FILE('/ruta/a/la/imagen3.jpg')),
-- (4, LOAD_FILE('/ruta/a/la/imagen4.jpg')),
-- (5, LOAD_FILE('/ruta/a/la/imagen5.jpg')),
-- (6, LOAD_FILE('/ruta/a/la/imagen6.jpg')),
-- (7, LOAD_FILE('/ruta/a/la/imagen7.jpg')),
-- (8, LOAD_FILE('/ruta/a/la/imagen8.jpg')),
-- (9, LOAD_FILE('/ruta/a/la/imagen9.jpg')),
-- (10, LOAD_FILE('/ruta/a/la/imagen10.jpg'));

-- Insertar 10 comentarios (de diferentes usuarios y en diferentes publicaciones)
INSERT INTO comentarios (id_usuario, id_publicacion, texto_comentario) VALUES
(2, 1, '¡Qué bonita foto!'),
(3, 2, 'Gracias por la recomendación.'),
(4, 3, '¡Me encantaría ir!'),
(5, 4, 'Parece un lugar increíble.'),
(1, 5, '¡Qué envidia!'),
(7, 6, 'Yo también quiero ir.'),
(8, 7, 'Muy interesante.'),
(9, 8, '¡Qué buena foto!'),
(10, 9, 'Gracias por compartir.'),
(1, 10, 'Me encanta.');

-- Insertar 10 interacciones (de diferentes usuarios y tipos en diferentes publicaciones)
INSERT INTO interacciones (id_usuario, id_publicacion, tipo_interaccion) VALUES
(1, 2, 'Me gusta'),
(2, 3, 'Compartir'),
(3, 4, 'Guardar'),
(4, 5, 'Me gusta'),
(5, 1, 'Comentario'),
(6, 7, 'Me gusta'),
(7, 8, 'Compartir'),
(8, 9, 'Guardar'),
(9, 10, 'Me gusta'),
(10, 1, 'Comentario');

-- Insertar 10 mensajes (entre diferentes usuarios)
INSERT INTO mensajes (id_emisor, id_receptor, texto_mensaje) VALUES
(1, 2, 'Hola, ¿cómo estás?'),
(2, 3, '¿Vamos a la playa este fin de semana?'),
(3, 4, 'Tengo una nueva recomendación para ti.'),
(4, 5, '¿Qué planes tienes para hoy?'),
(5, 1, 'Gracias por el mensaje.'),
(6, 7, 'Hola, ¿qué tal?'),
(7, 8, '¿Cómo te va?'),
(8, 9, '¿Qué haces?'),
(9, 10, '¡Hola!'),
(10, 1, '¿Cómo estás?');

-- Insertar 10 seguimientos (entre diferentes usuarios)
INSERT INTO seguimientos (id_seguidor, id_seguido) VALUES
(1, 2),
(2, 3),
(3, 1),
(4, 5),
(5, 4),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5);

-- Insertar datos en tipos_notificaciones
INSERT INTO tipos_notificaciones (nombre_tipo) VALUES
('seguimiento'),
('mensaje'),
('me gusta'),
('compartir');

-- Insertar 10 notificaciones (de diferentes tipos y para diferentes usuarios)
INSERT INTO notificaciones (id_emisor, id_receptor, id_tipo_notificacion) VALUES
(1, 2, 1),  -- Seguimiento
(2, 1, 2),  -- Mensaje
(3, 4, 3),  -- Me gusta
(5, 2, 4),  -- Compartir
(4, 1, 1),  -- Seguimiento
(7, 3, 2),  -- Mensaje
(8, 5, 3),  -- Me gusta
(6, 4, 4),  -- Compartir
(9, 1, 1),  -- Seguimiento
(10, 2, 2);  -- Mensaje
