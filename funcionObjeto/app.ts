const objeto = {
    nombre:'fer',
    apellido:'gonzalez',
    edad:20,
    direccion:'calle falsa 123',
}
type persona = {
    nombre:string,
    apellido:string,
    edad:number,
    direccion:string,
}
const funcionando = ({nombre = 'panfilo', apellido,edad,direccion}:persona) => {
    console.log(nombre, apellido,edad,direccion);
}

funcionando({nombre:'fer', apellido:'gonzalez',edad:20,direccion:'calle falsa 123'});