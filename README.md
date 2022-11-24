# INFORMACIÓN RELEVANTE

---

## Tabla de autenticación

```sql
create table usuario_auntenticacion (id_usuario int primary key auto_increment, nombre varchar(100), apellido_paterno varchar(100), apellido_materno varchar(100), nombre_usuario varchar(100), clave varchar(40));

-- Sentencias para insertar los usuarios de la base de datos
insert into usuario_autenticacion (nombre, apellido_paterno, apellido_materno, nombre_usuario, clave) values ('Kevin', 'Lazaro', 'Cernas', 'Keven', SHA1('athldept987'));
insert into usuario_autenticacion (nombre, apellido_paterno, apellido_materno, nombre_usuario, clave) values ('Leonel Alejandro', 'Ceballos', 'Alvarado', 'Lionel', SHA1('12345678'));
````

## Tablas con las que se trabajarán

- Especies.
- Ejemplares (Especie se utiliza como llave foranea dentro de esta tabla).
