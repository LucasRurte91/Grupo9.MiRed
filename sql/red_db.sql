CREATE TABLE `usuarios` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `telefono` INT NOT NULL,
   `contraseña` VARCHAR(100) NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `producto_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `titulo` VARCHAR(255) NOT NULL,
   `talle_id` INT,
   `marca_id` INT,
   `color_id` INT,
   `categoria_id` INT,
   `descripcion` TEXT NOT NULL,
   `usuario_id` INT,
   `precio` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `talles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   `producto_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `marcas` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `producto_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colores` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `producto_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categorias` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   `producto_id` INT,
   PRIMARY KEY (`id`)
);




ALTER TABLE `productos` ADD CONSTRAINT `FK_40ec731c-2013-4279-badf-65a4e1a5c99c` FOREIGN KEY (`talle_id`) REFERENCES `talles`(`id`)  ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_ea848839-e3f4-456c-95e7-41fd45de4f65` FOREIGN KEY (`marca_id`) REFERENCES `marcas`(`id`)  ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_f43fc829-8f53-47a5-8bff-f27b857f9fcf` FOREIGN KEY (`color_id`) REFERENCES `colores`(`id`)  ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_60ac256d-98f4-4777-98b6-797764a8d01f` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`) ;

ALTER TABLE `usuarios` ADD CONSTRAINT `FK_49dd9e1d-24be-48ed-b2bb-ec96f9db5dec` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`id`)  ;

insert into usuarios (id, nombre, email, telefono, contraseña) values (null, 'Jorge', 'jorge@gmail.com', 1112345678, 12345)
insert into usuarios (id, nombre, email, telefono, contraseña) values (null, 'Diego', 'diego@gmail.com', 1112345671, 12345)
insert into usuarios (id, nombre, email, telefono, contraseña) values (null, 'Celia', 'celia@gmail.com', 1112345677, 12345)
insert into usuarios (id, nombre, email, telefono, contraseña) values (null, 'Karina', 'karina@gmail.com', 1112345673, 12345)
insert into usuarios (id, nombre, email, telefono, contraseña) values (null, 'Pablo', 'pablo@gmail.com', 1112345676, 12345)
insert into usuarios (id, nombre, email, telefono, contraseña) values (null, 'Lucas', 'lucas@gmail.com', 1112345674, 12345)
insert into usuarios (id, nombre, email, telefono, contraseña) values (null, 'Agustin', 'agustin@gmail.com', 1112345675, 12345)

insert into talles (id, nombre) values (null, 'XS')
insert into talles (id, nombre) values (null, 'S')
insert into talles (id, nombre) values (null, 'M')
insert into talles (id, nombre) values (null, 'L')
insert into talles (id, nombre) values (null, 'XL')
insert into talles (id, nombre) values (null, 'XXL')
insert into talles (id, nombre) values (null, 37)
insert into talles (id, nombre) values (null, 38)
insert into talles (id, nombre) values (null, 39)
insert into talles (id, nombre) values (null, 40)
insert into talles (id, nombre) values (null, 41)
insert into talles (id, nombre) values (null, 42)
insert into talles (id, nombre) values (null, 43)
insert into talles (id, nombre) values (null, 44)

insert into marcas (id, nombre) values (null, 'Nike')
insert into marcas (id, nombre) values (null, 'Reebok')
insert into marcas (id, nombre) values (null, 'Under Armour')
insert into marcas (id, nombre) values (null, 'Puma')
insert into marcas (id, nombre) values (null, 'Adidas')
insert into marcas (id, nombre) values (null, 'Head')
insert into marcas (id, nombre) values (null, 'Wilson')

insert into colores (id, nombre) values (null, 'Negro')
insert into colores (id, nombre) values (null, 'Rojo')
insert into colores (id, nombre) values (null, 'Blanco')
insert into colores (id, nombre) values (null, 'Azul')
insert into colores (id, nombre) values (null, 'Verde')
insert into colores (id, nombre) values (null, 'Amarillo')

insert into categorias (id, nombre) values (null, 'Vestimenta')
insert into categorias (id, nombre) values (null, 'Paletas')
insert into categorias (id, nombre) values (null, 'Canchas')
insert into categorias (id, nombre) values (null, 'Pelotas')

INSERT INTO productos (id, titulo, talle_id, marca_id, color_id, categoria_id, descripcion, usuario_id, precio) VALUES (null, 'Remera', 3, 1, 1, 1, 'Remera de primer nivel ideal para un partido de padel. Ajustada', 3000)
INSERT INTO productos(id, titulo, talle_id, marca_id, color_id, categoria_id, descripcion, usuario_id, precio) VALUES (null, 'Zapatillas', 10, 6, 3, 1, 'Zapatillas deportivas comodas ultimo modelo para cancha con superficie dura.', 10000)
INSERT INTO productos (id, titulo, talle_id, marca_id, color_id, categoria_id, descripcion, usuario_id, precio) VALUES (null, 'Paleta', null, 8, 4, 2, 'Paleta liviana para adulto para jugar cerca de la red', 7000)
INSERT INTO productos (id, titulo, talle_id, marca_id, color_id, categoria_id, descripcion, usuario_id, precio) VALUES (null, 'Cancha', null, null, null, 3, 'Cancha de superficie tipo dura.', 2000)
INSERT INTO productos (id, titulo, talle_id, marca_id, color_id, categoria_id, descripcion, usuario_id, precio) VALUES (null, 'Pelotas', null, 10, null, 5, 'Tubo de 3 pelotas de padel de primera marca de larga duracion.', 2000)