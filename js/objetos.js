//"use strict";

//OBJETOS

const nombreProducto1 = "Monitor de 20 pulgadas";
const precio = 300;
const disponible = true;

//ESTO ES LO MISMO

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precioProducto : 300,
    disponibleProducto : true,
}

console.log(producto);

//sintaxis de punto

console.log(producto.precioProducto);
console.log(producto.nombreProducto);
console.log(producto.disponibleProducto);

/*Otra forma de acceder al objeto*/
console.log(producto['precioProducto']);


/*AGREGAR DATOS A UN OBJETO*/
console.log('Otra leccion');
producto.imagen = "imagen.jpg";

/*ELIMINAR DATOS A UN OBJETO*/
delete producto.imagen;

console.log(producto);

/*destructurar objetos*/

console.log('destructurar objetos');
//forma anterior
const precioDelProducto = producto.precioProducto;
const nombreDelProducto = producto.nombreProducto;

console.log(precioDelProducto);
console.log(nombreDelProducto);
//forma nueva destucturing

// const {precioProducto} = producto;
// const {nombreProducto} = producto;
// const {disponibleProducto} = producto;
//Es lo mismo
const {nombreProducto, precioProducto, disponibleProducto} = producto;

console.log(precioProducto);
console.log(nombreProducto);
console.log(disponibleProducto);


/*METODOS DE LOS OBJETOS*/
// "use strict"; para poner js estricto

console.log("METODOS DE OBJETOS");

const producto2 = {
    nombreProducto2 : "Monitor de 20 pulgadas",
    precioProducto2 : 300,
    disponibleProducto2 : true,
}

// Object.freeze(producto2);//no permite agregar mas elementos al objetos
// producto2.imagen = "imagen.jpg"; //NO PERMITE POR EL FREEZE
// delete producto2.imagen; //NO PERMITE POR EL FREEZE
// producto2.precioProducto2 = 400; //NO PERMITE POR EL FREEZE

Object.seal(producto2);
producto2.imagen = "imagen.jpg"; //NO PERMITE POR EL SEAL
delete producto2.nombreProducto2; //NO PERMITE POR EL SEAL
producto2.nombreProducto2 = "Television de 40\""; //PERO SI TE PERMITE MODIFICAR POR EL SEAL

console.log(Object.isFrozen(producto2));
console.log(producto2);


/*UNIR 2 OBJETOS*/
console.log("UNIR 2 OBJETOS");
const producto3 = {
    nombreProducto2 : "Monitor de 20 pulgadas",
    precioProducto2 : 300,
    disponibleProducto2 : true,
}
const medidas = {
    peso : "1 Kg",
    medida : "1m"
}

const nuevoProducto = { ...producto3, ...medidas }
console.log(producto3);
console.log(medidas);
console.log(nuevoProducto);

