//ARREGLOS

const numeros = [
    10,20,30,50,40
];

console.log(numeros);
console.table(numeros);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

console.table(meses);

const arreglo = ["Hola",1,null, false, {nombre:"Alfonso",oficio:"programador"},[1,2,3]];
console.log(arreglo);

/*Acceder a los valores del arreglo */

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

/*Conocer la extension de un arreglo*/
cantidad = numeros.length;

console.log(cantidad);

meses.forEach(function(mes){
    console.log(mes);
});