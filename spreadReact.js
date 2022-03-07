"use strict";
const objetos = [{
        nombre: 'fernando',
        apellido: 'sosa',
        altura: 180
    }];
const objetos2 = [{
        nombre: 'anacleto',
        apellido: 'sosa',
        altura: 190,
    }, {
        nombre: 'Panfilo',
        apellido: 'pans',
        altura: 170,
    }];
let respuestaObjeto = objetos.map((valor) => (Object.assign(Object.assign({}, valor), { nombre: 'Maria' })));
console.log(respuestaObjeto);
let respuestaObjeto2 = objetos2.map((valor) => (Object.assign(Object.assign({}, valor), { nombre: 'Melissa' })));
console.log(respuestaObjeto2);
