class Persona {
  static _contar = 0;
  nombre: string;
  apellido: string;
  edad: number;
  ciudad: string;
  constructor(
    nombre: string,
    apellido: string,
    edad: number = 32,
    ciudad: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  tuEdad() {
    console.log(this.nombre, this.edad, "Tiene otro nombre");
    console.log(Persona._contar);
  }

  set setCiudad(ciudad: string) {
    this.ciudad = ciudad;
    console.log(ciudad);
  }
  get getContenido() {
    return this.apellido;
  }
}
class Animales extends Persona {
  nombre: string;
  apellido: string;
  raza: string;
  animal: string;
  edad:number;
  constructor(
    nombre: string,
    apellido: string,
    edad:number,
    raza: string,
    animal: string
  ) {
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

const animal = new Animales(
  "FernandoAnacleto",
  "Ssosa",
    33,
  "ninguna raza",
  "perro"
);
animal.tipoAnimal();

console.log(animal.queanimal(), "Tenemos");
console.log(animal.nombre);
