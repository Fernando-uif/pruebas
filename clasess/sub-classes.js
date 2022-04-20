class Persona {
    static _contar = 0;
    nombre;
    apellido;
    edad;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad =edad;
    }

    tuEdad() {
        console.log(this.nombre);
        console.log(Persona._contar);
    }

    set setCiudad(ciudad) {
        this.ciudad = ciudad;
        console.log(ciudad);
    }
    get getContenido() {
        return this.apellido ;
    }

}
class Animales extends Persona{
    nombre;
    apellido;
    raza;
    constructor(nombre,apellido,edad,raza){
        super(nombre, apellido, edad);
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.raza = raza;
    }
}

const humano = new Persona('fernando','Sosa',25);
humano.tuEdad();

humano.setCiudad= 'mexico';
console.log(humano.getContenido);

Persona.aiuda = 'como se encuentran';
console.log(Persona);
console.log(Persona.aiuda);

const animal = new Animales('ningunNombre','panfilo',23, 'la razaa');
console.log(animal);