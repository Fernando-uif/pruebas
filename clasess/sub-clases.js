"use strict";
class Persona {
    constructor(nombre, apellido, edad = 32, ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
    }
    tuEdad() {
        console.log(this.nombre, this.edad, "Tiene otro nombre");
        console.log(Persona._contar);
    }
    set setCiudad(ciudad) {
        this.ciudad = ciudad;
        console.log(ciudad);
    }
    get getContenido() {
        return this.apellido;
    }
}
Persona._contar = 0;
class Animales extends Persona {
    constructor(nombre, apellido, edad, raza, animal) {
        super("fernando", "sss", 334, "mexicou");
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.raza = raza;
        this.animal = animal;
    }
    tipoAnimal() {
        // console.log(this.nombre,'el name');
        super.tuEdad();
        return this.nombre;
    }
    queanimal() {
        console.log(this.edad, "tenemos edad");
        return this.animal;
    }
}
const animal = new Animales("FernandoAnacleto", "Ssosa", 33, "ninguna raza", "perro");
animal.tipoAnimal();
console.log(animal.queanimal(), "Tenemos");
console.log(animal.nombre);
