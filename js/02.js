//Variables con let
var productoVar = "Television"; //Variable modificable cambia
let productoLet = "Audifonos"; //Variable modificable no cambia pero se pueden cambiar
const productoConst = "Carro"; //Variable constante fijo

productoVar ="Television 2";
productoLet ="Television 3";
//productoConst ="Television 4"; //Esto marca error

/*Tipos de datos*/
/*STRINGS*/
const producto4 = "Monitor de 20 pulgadas";

const producto5 = String('Monitor 30 Pulgadas'); //Metodo string
const producto6 = new String('Monitor 30 Pulgadas'); //Constructor 

console.log(producto4);
console.log(producto5);
console.log(producto6);

const producto7 =  "Monitor de 20\""
console.log(producto7);

const producto8 =  'Monitor de 20"'
console.log(producto8);

/*METODOS STRIGS*/
const producto9 =  'Monitor de 20"'
const producto10 =  'Monitor de 20"'


console.log(producto9.length);//Es para conocer cuantos caracteres tiene un string
console.log(producto9.indexOf('Mo'));//Para saber si la palabra existe en una cadena de texto Cuando es -1 significa que no lo encontro
console.log(producto9.includes('Mo'));//Para saber si la palabra existe en una cadena de texto Cuando pero solo true o false
/*Para validar formularios se ponen */


/*NUMEROS*/
const nume1 = 100;
const nume2 = 200;
const nume3 = 200.20;
//No es necesario especificar el tipo de numero Flotante, enteros, double, float

console.log(nume1);
console.log(nume2);

console.log("Total "+ (nume2-nume1));
console.log(nume2+nume1);//SUMA
console.log(nume2-nume1);//RESTA
console.log(nume2/nume1);//DIVISION
console.log(nume2*nume1);//MULTIPLICACION
console.log(nume2%nume1);//MODULO O RESIDUO