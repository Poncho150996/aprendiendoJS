/*METODOS MATH*/

let resultado; 

resultado = Math.PI;
resultado = Math.round(2.5); //REDONDEO
resultado = Math.ceil(2.5); //REDONDEO HACIA ARRIBA
resultado = Math.floor(2.5); // REDONDEO HACIA ABAJO
resultado = Math.sqrt(144);
resultado = Math.abs(-200);
resultado = Math.min(3,5,4,8,9,);
resultado = Math.max(3,5,4,8,9,);
resultado = Math.random(4);
resultado = Math.floor(Math.random()*30);

console.log(resultado);


/*ORDEN DE OPERACIONES*/

/*
^
()[]
* / 
+-

*/

let resultado2 = (20 +30) *2;
resultado2 = (200 +300 +100) * .2;
resultado2 = (200 +300 +100) * 1.16;
resultado2 = (200 + 100) * 1.05;
console.log(resultado2);

// Incrementos 

let puntaje = 10;

puntaje++;//agrega 1

++puntaje;//agrega 1

puntaje--;//Resta 1
--puntaje;//Resta 1

puntaje += 10;
puntaje -= 5;

console.log(puntaje);

/*Concatenacion de strings*/

const nombre = "Alfonso Meza";
const email = "alfonso150996";

console.log("Nombre: "+nombre + ", Email: " + email);//Es igual que 
console.log("Nombre: ",nombre , ", Email: " , email);//Este

//temple strings

console.log(`Nombre cliente: ${nombre}, email: ${email}`);//PUEDE IR VARIABLE O FUNCION TEMPLEAT STRING



/*BOOLEANS Solo tiene 2 valores para banderas*/

const boolean1 = true;
const boolean2 = false;

console.log(boolean1);//Imprimir la variable
console.log(typeof boolean1);//Para ver el tipo de dato de una variable

const boolean3 = new Boolean(true);//Con el constructor
console.log(boolean3);//Imprimir la variable como objeto



