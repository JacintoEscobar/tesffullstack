## Creamos la base de datos
drop database if exists bd_escobar;
create database bd_escobar;
use bd_escobar;

## Creamos la tabla
create table person (
    id int primary key auto_increment,
    nombre varchar(45) not null,
    apellido varchar(45) not null,
    fechaNacimiento date not null,
    puesto varchar(45) not null,
    sueldo float not null
);

## Creamos el usuario
create user 'conexion'@'localhost' identified by 'Wk2!rT8s@6w';
grant all privileges on bd_escobar.* to 'conexion'@'localhost';

## Ejecutamos el script sql
source path\bd_escobar.sql
