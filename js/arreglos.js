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

/*MODIFICAR ARREGLOS*/

const numeros2 = [
    10,20,30,50,40
];

numeros2[5]=60; //Por indice. pero se debe de saber el contexto del arreglo
numeros2[6]=70;

numeros2[3]=80;//Pero puedes modificar el index que ya existe

numeros2.push(100); //Se agrega al final del arreglo, lo agrega al final del arreglo
numeros2.push(100,500,600); //Se pueden agregar varios elementos, pero puede modificar su estructura.
numeros2.unshift(-20,-30,-50); //Para agregar elementos al inicio del arreglo

numeros2.pop();//Para eliminar el ultimo elemento del arreglo
numeros2.shift();//Elimina el primer elemento del arreglo
numeros2.splice(3,1);//Elimina apartir del indice, 3 corresponde el elemento y 1 corresponde a cuantos eliminaran

/*Esto modifica el arreglo original, y lo recomendable es gneerar un nuevo arreglo.*/

const nuevoArreglo=[...numeros2,1000];//Se copia primero y luego agrega al final
const nuevoArreglo2=[1000,...numeros2];//Se copia primero y luego agrega al inicio

console.log(numeros2);
console.log(nuevoArreglo);
console.log(nuevoArreglo2);

/*METODOS DE ARREGLO*/

//NO EXISTE ARREGLOS ASOCIATIVOS, PERO SI EXISTEN ARREGLOS DE OBJETOS
const meses2 = ['Enero','Febrero','Marzo','Abril','Mayo'];
console.log(meses2);

//ARREGLO CON OBJETOS
const carritos= [
    {nombre:'Monitor 20 Pulgadas',precio:500},
    {nombre:'Television 50 Pulgadas',precio:700},
    {nombre:'Tablet',precio:800},
    {nombre:'Celular',precio:1000},
    {nombre:'Moto juguete',precio:900},
    {nombre:'Carro juguete',precio:1500},
    {nombre:'Audifonos',precio:600},
    {nombre:'Reloj',precio:400},
    {nombre:'Laptop',precio:3500},
    {nombre:'Bocinas',precio:1000},
    {nombre:'Teclado',precio:300},
]

//Saber si marzo existe en el arreglo

meses2.forEach(function (mes) {
    // console.log(mes);

    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//INCLUDES
const resultado = meses2.includes('Marzo');//PARA BUSCAR UN DATO EN UN ARREGLO PLANO
console.log(resultado);

const resultcarrito = carritos.includes('Celular');//MARCA FALSE POR QUE NO DETECTA LOS OBJETOS
console.log(resultcarrito);

let resultcarritos = carritos.some(function (producto) { //IDEAL PARA BUSCAR DATOS EN UN ARREGLO CON OBJETOS
    return producto.nombre === 'Celular';
})
console.log(resultcarritos);

//ARROW FUNTION
let resultcarritos2 = carritos.some(producto => producto.nombre === 'Celular');
console.log(resultcarritos2);

//REDUCE, TOMA LOS NUMEROS Y DA UN RESULTADO

resultadosuma = carritos.reduce(function (total, producto){
    return total+ producto.precio;
},0);
console.log(resultadosuma);

resultadosuma2 = carritos.reduce((total,producto) => total + producto.precio,0);
console.log(resultadosuma2);

//FILTER
//para buscar un elemento en un arreglo con objetos

let filtros = carritos.filter(function (producto) {
    return producto.precio > 1000;
}) 

let filtros2 = carritos.filter(function (producto) {
    return producto.nombre === 'Celular';
}) 

let filtros3 = carritos.filter(producto => producto.nombre === 'Celular');

console.log(filtros);
console.log(filtros2);
console.log(filtros3);
