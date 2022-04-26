"use strict";
class Persona {
    constructor(nombre, apellido, edad, comida) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.comida = comida;
    }
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
        console.log(comida);
    }
    get getComidaFavorita() {
        return `la comida favorita siempre sera ${this.comida}`;
    }
    quienSoy() {
        console.log(`soy: ${this.nombre}, mi apellido es ${this.apellido}, mi edad es :${this.edad}`);
    }
    saludo() {
        this.quienSoy();
        console.log('hola');
    }
}
const persona = new Persona('fernando', 'sosa', 26, 'flan');
console.log(persona);
Persona._contar = 'estatico';
console.log(Persona._contar);
