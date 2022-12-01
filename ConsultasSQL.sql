------------> Consultas <------------

delimiter //
create procedure nombreEjemplares()
begin
select nombre from ejemplares;
end //
delimiter ;

delimiter //
create procedure nombreEspeciesGenerico()
begin
select nombre_generico from especies;
end //
delimiter ;

delimiter //
create procedure nombreEspeciesCientifico()
begin
select nombre_cientifico from especies;
end //
delimiter ;

delimiter //
create procedure ejemplarEspecie()
begin
select ej.nombre, e.nombre_generico from especies e, ejemplares ej where ej.fk_especie = e.id_especie;
end //
delimiter ;

------------> Agregar <------------

delimiter //
create procedure nuevoEjemplar(codigo int, fk_especie int, fecha_nac date, fecha_defuncion date, nombre varchar(20), padre varchar(25), madre varchar(25), pertenece_zoo boolean)
begin
insert into ejemplares (codigo, fk_especie, fecha_nac, fecha_defuncion, nombre, padre, madre, pertenece_zoo) VALUES(codigo, fk_especie, fecha_nac, fecha_defuncion, nombre, padre, madre, pertenece_zoo);
end//
delimiter ;

delimiter //
create procedure nuevaEspecie(nombre_generico varchar(25), nombre_cientifico varchar(30), familia varchar(25), descripcion_cuidado varchar(150), explicacion_especie varchar(120))
begin
insert into especies (nombre_generico, nombre_cientifico, familia, descripcion_cuidado, explicacion_especie) VALUES(nombre_generico, nombre_cientifico, familia, descripcion_cuidado, explicacion_especie);
end//
delimiter ;

------------> Eliminar <------------

delimiter //
create procedure eliminar(in tabla varchar(30), in campo_id varchar(45), in id int)
begin
SET @query = CONCAT("delete from ",tabla, " where ", campo_id , " = ", id,";");
PREPARE s FROM @query; 
EXECUTE s; 
deallocate prepare s; 
end//
delimiter ;

------------> Actualizar <------------

------------> Buscar <------------


------------> Disparadores <------------
create table disparadorEspecies (id int auto_increment primary key, datos varchar(100), accion varchar(50));
create table disparadorEjemplares (id int auto_increment primary key, datos varchar(100), accion varchar(50));

delimiter //
create trigger nuevoEspecie before insert on especies for each row
begin
INSERT INTO disparadorEspecies(datos, accion) VALUES ((CONCAT(' Id especie: ', new.id_especie, ' Nombre generico : ',new.nombre_generico, ' Nombre cientifico: ' ,new.nombre_cientifico)), 'NUEVO REGISTRO INSERTADO CORRECTAMENTE');
end //
delimiter ;

delimiter //
create trigger eliminarEspecie before delete on especies for each row
begin
INSERT INTO disparadorEspecies(datos, accion) VALUES ((CONCAT(' Id especie: ', old.id_especie, ' Nombre generico : ',old.nombre_generico, ' Nombre cientifico: ' ,old.nombre_cientifico)), 'REGISTRO ELIMINADO CORRECTAMENTE');
end //
delimiter ;

delimiter //
create trigger nuevoEspecie before update on especies for each row
begin
INSERT INTO disparadorEspecies(datos, accion) VALUES ((CONCAT(' Id especie: ', new.id_especie, ' Nombre generico : ',new.nombre_generico, ' Nombre cientifico: ' ,new.nombre_cientifico)), 'REGISTRO ACTUALIZADO CORRECTAMENTE');
end //
delimiter ;

delimiter //
create trigger nuevoEjemplar before insert on ejemplares for each row
begin
INSERT INTO disparadorEjemplares(datos, accion) VALUES ((CONCAT(' Id ejemplar: ', new.id_ejemplar, ' Codigo: ',new.codigo, ' Nombre: ' ,new.nombre)), 'NUEVO REGISTRO INSERTADO CORRECTAMENTE');
end //
delimiter ;

delimiter //
create trigger eliminarEjemplar before delete on ejemplares for each row
begin
INSERT INTO disparadorEjemplares(datos, accion) VALUES ((CONCAT(' Id ejemplar: ', old.id_ejemplar, ' Codigo: ',old.codigo, ' Nombre: ' ,old.nombre)), 'REGISTRO ELIMINADO CORRECTAMENTE');
end //
delimiter ;

delimiter //
create trigger updateEjemplar before update on ejemplares for each row
begin
INSERT INTO disparadorEjemplares(datos, accion) VALUES ((CONCAT(' Id ejemplar: ', new.id_ejemplar, ' Codigo: ',new.codigo, ' Nombre: ' ,new.nombre)), 'REGISTRO ACTUALIZADO CORRECTAMENTE');
end //
delimiter ;