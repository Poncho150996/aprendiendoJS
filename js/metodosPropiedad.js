/*CREAR NUESTRAS PROPIOS METODOS*/

//METODOS DE PROPIEDAD
const reproductor ={
    reproducir : function(id){
        console.log(`Reproduciendo cancion ${id}`);
    },
    pausar : function(id){
        console.log(`Reproduciendo cancion ${id}`);
    },
    crearPlayList : function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

console.log(reproductor); 

reproductor.reproducir(3840);
reproductor.pausar(3840);

reproductor.borrarCancion = function (id){
    console.log(`Eliminando la cancion ${id}`);
}

reproductor.borrarCancion(20);
reproductor.crearPlayList('Metal');
reproductor.reproducirPlaylist('Metal');
// console.log(reproductor); 


/*ARROW FUNTIONS*/
//ES OTRA FORMA DE AGREGAR FUNCIONES es mas corta
//SOLO SE UTILIZA PARA LA EXPRESION DE LA FUNCION

//Esto es una expresion de la funcion
const suma = function (n1,n2) {
        console.log(n1+n2);
}
    
suma(5,10);

// SINTAXIS larga
const sumav2 = (n1,n2)=>{
    console.log(n1+n2);
}
sumav2(5,10);
// SINTAXIS corta
const sumav3 = (n1,n2)=> console.log(n1+n2);

sumav3(5,10);

const aprendiendo = tecnologia=> console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('Javascript');



const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
console.log(meses);

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


meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log(`El mes de Marzo si esta
        `);
    }
});


//SIN ARROW FUNTIONS
let resultcarritos = carritos.some(function (producto) { //IDEAL PARA BUSCAR DATOS EN UN ARREGLO CON OBJETOS
    return producto.nombre === 'Celular';
})

//CON ARROW FUNTIONS
const buscar = carritos.some( producto => producto.nombre === 'Celular');

console.log(buscar);

//SIN ARROW 
resultadosuma = carritos.reduce(function (total, producto){
    return total+ producto.precio;
},0);

//CON ARROW FUNTIONS
const resultado = carritos.reduce((total,producto) => total + producto.precio,0);
console.log(resultado);


//SIN ARROW 
let filtros = carritos.filter(function (producto) {
    return producto.precio > 1000;
}) 
//CON ARROW FUNTIONS
let filtros2 = carritos.filter(producto => producto.precio>1000);
console.log(filtros2);