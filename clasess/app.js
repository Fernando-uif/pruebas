class Persona {
    static _contar = 0;
    nombre;
    apellido;
    edad;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad =25;
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

const humano = new Persona('fernando','Sosa',25);
humano.tuEdad();

humano.setCiudad= 'mexico';
console.log(humano.getContenido,'Tenemos apellido');
console.log(humano.getContenido);

Persona.aiuda = 'como se encuentran';

console.log(Persona._contar);