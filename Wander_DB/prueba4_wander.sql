-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema wanderlust_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema wanderlust_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wanderlust_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `wanderlust_db` ;

-- -----------------------------------------------------
-- Table `wanderlust_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(255) NOT NULL,
  `apellidos` VARCHAR(255) NOT NULL,
  `nombre_usuario` VARCHAR(255) NOT NULL,
  `fecha_nacimiento` DATE NULL DEFAULT NULL,
  `genero` ENUM('Masculino', 'Femenino', 'Otro', 'Prefiero no especificar') NULL DEFAULT NULL,
  `email` VARCHAR(255) NOT NULL,
  `contraseña` VARCHAR(255) NOT NULL,
  `estatus` ENUM('Activo', 'Inactivo') NULL DEFAULT 'Activo',
  `es_admin` TINYINT(1) NULL DEFAULT '0',
  `latitud` DECIMAL(10,8) NULL DEFAULT NULL,
  `longitud` DECIMAL(11,8) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `nombre_usuario` (`nombre_usuario` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`publicaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`publicaciones` (
  `id_publicacion` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `tipo` ENUM('Sencilla', 'Reseña') NOT NULL,
  `fecha_publicacion` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `privacidad` ENUM('Publica', 'Privada', 'Amigos') NULL DEFAULT 'Publica',
  `latitud` DECIMAL(10,8) NULL DEFAULT NULL,
  `longitud` DECIMAL(11,8) NULL DEFAULT NULL,
  PRIMARY KEY (`id_publicacion`),
  INDEX `id_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `publicaciones_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`comentarios` (
  `id_comentario` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_publicacion` INT NOT NULL,
  `texto_comentario` TEXT NOT NULL,
  `fecha_comentario` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_comentario`),
  INDEX `id_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `id_publicacion` (`id_publicacion` ASC) VISIBLE,
  CONSTRAINT `comentarios_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`),
  CONSTRAINT `comentarios_ibfk_2`
    FOREIGN KEY (`id_publicacion`)
    REFERENCES `wanderlust_db`.`publicaciones` (`id_publicacion`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`imagenes` (
  `id_imagen` INT NOT NULL AUTO_INCREMENT,
  `id_publicacion` INT NOT NULL,
  `ruta_imagen` BLOB NOT NULL,
  `fecha_subida` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_imagen`),
  INDEX `id_publicacion` (`id_publicacion` ASC) VISIBLE,
  CONSTRAINT `imagenes_ibfk_1`
    FOREIGN KEY (`id_publicacion`)
    REFERENCES `wanderlust_db`.`publicaciones` (`id_publicacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`interacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`interacciones` (
  `id_interaccion` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_publicacion` INT NOT NULL,
  `tipo_interaccion` ENUM('Me gusta', 'Comentario', 'Compartir', 'Guardar') NOT NULL,
  `fecha_interaccion` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_interaccion`),
  INDEX `id_usuario` (`id_usuario` ASC) VISIBLE,
  INDEX `id_publicacion` (`id_publicacion` ASC) VISIBLE,
  CONSTRAINT `interacciones_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`),
  CONSTRAINT `interacciones_ibfk_2`
    FOREIGN KEY (`id_publicacion`)
    REFERENCES `wanderlust_db`.`publicaciones` (`id_publicacion`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`mensajes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`mensajes` (
  `id_mensaje` INT NOT NULL AUTO_INCREMENT,
  `id_emisor` INT NOT NULL,
  `id_receptor` INT NOT NULL,
  `texto_mensaje` TEXT NULL DEFAULT NULL,
  `fecha_envio` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('Enviado', 'Leído', 'Eliminado') NULL DEFAULT 'Enviado',
  PRIMARY KEY (`id_mensaje`),
  INDEX `id_emisor` (`id_emisor` ASC) VISIBLE,
  INDEX `id_receptor` (`id_receptor` ASC) VISIBLE,
  CONSTRAINT `mensajes_ibfk_1`
    FOREIGN KEY (`id_emisor`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`),
  CONSTRAINT `mensajes_ibfk_2`
    FOREIGN KEY (`id_receptor`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`tipos_notificaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`tipos_notificaciones` (
  `id_tipo_notificacion` INT NOT NULL AUTO_INCREMENT,
  `nombre_tipo` ENUM('seguimiento', 'mensaje', 'me gusta', 'compartir') NOT NULL,
  PRIMARY KEY (`id_tipo_notificacion`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`notificaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`notificaciones` (
  `id_notificacion` INT NOT NULL AUTO_INCREMENT,
  `id_emisor` INT NULL DEFAULT NULL,
  `id_receptor` INT NOT NULL,
  `id_tipo_notificacion` INT NOT NULL,
  `fecha_notificacion` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('Leída', 'No leída') NULL DEFAULT 'No leída',
  PRIMARY KEY (`id_notificacion`),
  INDEX `id_receptor` (`id_receptor` ASC) VISIBLE,
  INDEX `id_emisor` (`id_emisor` ASC) VISIBLE,
  INDEX `id_tipo_notificacion` (`id_tipo_notificacion` ASC) VISIBLE,
  CONSTRAINT `notificaciones_ibfk_1`
    FOREIGN KEY (`id_receptor`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`),
  CONSTRAINT `notificaciones_ibfk_2`
    FOREIGN KEY (`id_emisor`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`),
  CONSTRAINT `notificaciones_ibfk_3`
    FOREIGN KEY (`id_tipo_notificacion`)
    REFERENCES `wanderlust_db`.`tipos_notificaciones` (`id_tipo_notificacion`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`perfiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`perfiles` (
  `id_perfil` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `biografia` TEXT NULL DEFAULT NULL,
  `foto_perfil` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_perfil`),
  UNIQUE INDEX `id_usuario` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `perfiles_ibfk_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`publicaciones_sencillas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`publicaciones_sencillas` (
  `id_publicacion` INT NOT NULL,
  `texto` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id_publicacion`),
  CONSTRAINT `publicaciones_sencillas_ibfk_1`
    FOREIGN KEY (`id_publicacion`)
    REFERENCES `wanderlust_db`.`publicaciones` (`id_publicacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`reseñas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`reseñas` (
  `id_publicacion` INT NOT NULL,
  `titulo` VARCHAR(255) NOT NULL,
  `texto` TEXT NULL DEFAULT NULL,
  `num_estrellas` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_publicacion`),
  CONSTRAINT `reseñas_ibfk_1`
    FOREIGN KEY (`id_publicacion`)
    REFERENCES `wanderlust_db`.`publicaciones` (`id_publicacion`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wanderlust_db`.`seguimientos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wanderlust_db`.`seguimientos` (
  `id_seguimiento` INT NOT NULL AUTO_INCREMENT,
  `id_seguidor` INT NOT NULL,
  `id_seguido` INT NOT NULL,
  `fecha_seguimiento` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_seguimiento`),
  INDEX `id_seguidor` (`id_seguidor` ASC) VISIBLE,
  INDEX `id_seguido` (`id_seguido` ASC) VISIBLE,
  CONSTRAINT `seguimientos_ibfk_1`
    FOREIGN KEY (`id_seguidor`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`),
  CONSTRAINT `seguimientos_ibfk_2`
    FOREIGN KEY (`id_seguido`)
    REFERENCES `wanderlust_db`.`usuarios` (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
