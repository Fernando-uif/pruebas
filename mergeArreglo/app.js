// * Hacer merge de arreglo
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let total = [...arr1, 3,5];

// * Haciendo merge de objetos
let obj = {
    nombre:'fer',
    apellido:'sosa'
}
let obj2 = {
    nombre2:'fernando',
    apellido2:'sosa Torres'
}

let total2 = [{...obj,...obj2}];

// * Ejercicio 3
let obj3 = {
    nombre3:'fernando',
    apellido3:'sosa Torres'
}

let arr3 = [1,2,3,4,'hello']
let ans3 = { ...obj3, ...arr3};
// console.log(ans3, 'Tenemos la combinacion de arreglo y objeto dentro de un objeto');

// * Otro ejercicio
let obj4 = {
    nivel:3,
    acuerdo:'ninguno',
    dialogo:'ninguno'
}

let acomodadoObjeto = {...obj4};

// * Ejercicio plus

let arr5 = [1,2,3,4,5,6,'hello'];

// console.log(...arr5,'Todos');


let arreglo = ['palabra', 'palabra2'];
let arreglo2 = ['palabra3','palabra4']


// * -----------------------------------
// * en arreglo se puede juntar
let arreglo5 = ['elemento', 'elemento2'];
let arreglo6 = ['elemento3', 'elemento4'];

let resultanteArreglo = [...arreglo5, ...arreglo6];

// * ---------------------------------------
// * se puede juntar entre objetos
let objeto = {
    nombre:'fer',
    apellido:'sosa',
};
let objeto2 = {
    edad:1,
    estatura:1_8,
}

let resultanteObjeto = {...objeto, ...objeto2};

let resultanteObjeto11 = {...objeto, objeto2};


// * ---------------------------------------
// ! dentro de arreglo no se puede hacer merge, de un arr y un obj
let arregloOb1 = ['palabra1','palabra2'];
let objArregl = {
    nombre:'fer',
    apellido:'sosa',
}
// let resultanteObjArr = [...arregloOb1, ...objArregl];
// * -----------------------------------------
// * Se puede combinar arreglo y objeto dentro e un objeto
let arregloOb2 = ['palabra1','palabra2'];
let objArregl2 = {
    nombre:'fer',
    apellido:'sosa',
}
let resultanteObjArr2 = { ...arregloOb2, ...objArregl2};
let resultanteObjArr22 = { ...arregloOb2, objArregl2};
// console.log(resultanteObjArr2);

// * ---------------------------------------
// * Se puede merge de dos arreglo dentro de un objeto
let arregloObj3 = ['palabra','palabra2'];
let objArregl3 = ['palabra3','palabra4'];

let resultanteObjeArr3 = { ...arregloObj3, ...objArregl3};

// * ------------------------------------------
// ! No se puede juntar dos objetos dentro de un arreglo
let arregloObj4 = { nombre:'fer',apellido:'sosa'};
let objArregl4 = { edad:0, estatura:1_80};

// let resultanteObjeArr4 = [...arregloObj4, ...objArregl4];
// console.log(resultanteObjeArr4);

// * ---------------------------------------------
// * Agregar un objeto desde un array sirve en react
let arregloObj5 = [];
let objArr5 = {
    nombre:'fer',
    apellido:'sosa'
};
let resultante11 = [...arregloObj5, objArr5];


// * Cuando tenemos dos ...elemento ...elemento2 estos hacen Merge 
// * Cuando tnemos ...elemento, elemento2 , los sumamos, se lo adicionamos

const objeta = {
    payload:'informacion',
    nombre:'fernando',
    apellido:'sosa',
}

console.log({...objeta.payload, amigos:'hola', ...objeta});  