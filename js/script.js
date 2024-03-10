/*
Variables
*/

var producto = 'Carro';
var disponible;
producto = true; //Reasignacion de variable

disponible = true;

//Creacion de varias variables de golpe.
var producto1 = 'Computadora',
    disponible1 = true,
    camino = 'Computadoras';

//Reglas de generacion variables No pueden generar nombres de variables con iniciales numericas ejem. variable
//1variable = true; //Esto marca error
//variable_1 = true; //Lo correcto es 

//Estilos de creacion de variables
var nombre_producto = 'Monitor HD'; //underscore
var nombreProducto = 'Prueba' //Camelcase
var NombreProducto = 'Prueba2' //Pascal case
var nombreproducto = "OTro producto";//Este no tiene formato

//las variables son sensibles a mayusculas o minusculas
console.log(producto);