const valor = 1;

switch (valor) {
  case 1:
    console.log("Ha entrando en 1");
    break;
  case 2:
    console.log("Ha entrando en 2");
    break;
  case 3:
    console.log("Ha entrando en 3");
    break;

  default:
    break;
}
switch (valor) {
  case 1:
    console.log("Ha entrando en 1 del 2");
    break;
  case 2:
    console.log("Ha entrando en 2 del 2");
    break;
  case 3:
    console.log("Ha entrando en 3 del 2");
  default:
    break;
}

const obje = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};
// console.log(obje);
// console.log({ ...obje, nombre: "pedro perez" });
const obje2 = [1, 2, 3, 4, 5];
// console.log([...obje2, 6, 7, 8]);

const obje4 = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
  },
  { nombre: "pepe", apellido: "perez", edad: 30 },
];

console.log({...obje4['0'],nombre:"pedro perez"});
