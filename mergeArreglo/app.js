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
console.log(...arreglo, ...arreglo2);


