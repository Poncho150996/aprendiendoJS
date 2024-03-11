//FUNCIONES SON UNA SERIE DE PROCEDIMIENTOS Son reutilizables
/*
3 FORMAS DE CREAR FUNCIONES 
1.- DECLARACION DE LA FUNCION
2.- EXPRECION DE LA FUNCION
3.- IIFE
*/

//DECLARACION DE LA FUNCION

function multiplicar() { //Declaracion de la funcion
    console.log(10+10);
}

multiplicar();//Mandar a llamar la funcion

//EXPRESION DE LA FUNCION
const sumar2 = function () {
    console.log(3+3);
}

sumar2();

//IIFE
(function (){ //No se requieren llamar, por que se invocan ellas mismas, estas no son para reutilizar, sirven para proteger variables
    console.log('Esto es una funcion');
    const cliente = 'Juan';
})();

// console.log(cliente);//NO ES POSIBLE ACCEDER POR QUE ESTA PROTEGIDO POR LA FUNCION IIFE

/*DIFERENCIA ENTRE DECLARACION Y EXPRESION DE LA FUNCION*/

sumaInt1();//Mandar a llamar la funcion
function sumaInt1() { //Declaracion de la funcion
    console.log(100+100);
}


//EXPRESION DE LA FUNCION
// sumaInt2();//ESTO MARCA ERROR POR EL HOISTING, PRIMERO SE REGISTRAN TODAS LAS FUNCIONES Y DESPUES LOS LLAMADOS A LAS FUNCIONES 1 PREPARACION Y 2 EJECUCION
const sumaInt2 = function () {//ESTO SE CONSIDERA UNA VARIABLE Y POR ESO NO SE LEE EN LA FASE DE PREPARACION
    console.log(30+30);
}

/*DIFERENCIA ENTRE METODOS Y FUNCIONES*/

/*DEPENDIENDO DEL CONTEXTO SE UTILIZA UNO U OTRO*/

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2));//Esto es una funcion
console.log(numero2.toString());//Esto es metodo por que se encuentra antes de la accion

/*FUNCIONES CON PARAMETROS Y ARGUMENTOS*/

function sumav3(num1,num2) { //Declaracion de la funcion
    console.log(num1+num2);
}

sumav3(5,10);//LLAMAR FUNCION COMO ARGUMENTOS
sumav3(20,10);//LLAMAR FUNCION COMO ARGUMENTOS
sumav3(15,10);//LLAMAR FUNCION COMO ARGUMENTOS
sumav3(50,10);//LLAMAR FUNCION COMO ARGUMENTOS

const suma2v3 = function (num1,num2) {// NUM1 NUM2 SON PARAMETROS
    console.log(num1+num2);
}

suma2v3(40,5);//4 5 SON ARGUMENTOS
suma2v3(60,5);//4 5 SON ARGUMENTOS 


// PARAMETROS POR DEFAULT POR QUE NECESITAS UNA FUNCION QUE NO SEAN OBLIGATORIOS TODOS LOS PARAMETROS
function sumav4(num1 = 0,num2 = 0, num3 = 0) { //Definir un valor por default
    console.log(num1+num2);
}
sumav4(50,10);//LLAMAR FUNCION COMO ARGUMENTOS 

/*FUNCION QUE RETORNA UN VALOR*/
// Ejemplo1
function sumav5(n1 = 0,n2 = 0) { //Definir un valor por default
    return n1 +n2;
}

let resultadosuma = sumav5(50,10);//LLAMAR FUNCION COMO ARGUMENTOS 
console.log(`El resultado de la suma es ${resultadosuma}`);
// Ejemplo2

let total = 0;

function agregarCarrito(precio) {
    return total+=precio;
}
function calcularImpuesto(total) {
    return total*1.16;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

totalPagar = calcularImpuesto(total);

console.log(`El total del carrito es ${total}`);
console.log(`El total a pagar es ${totalPagar}`);
