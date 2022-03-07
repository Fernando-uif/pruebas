const objetos:object[] = [{
    nombre:'fernando',
    apellido:'sosa',
    altura:1_80
}]
const objetos2:object[] = [{
    nombre:'anacleto',
    apellido:'sosa',
    altura:1_90,
},{
    nombre:'Panfilo',
    apellido:'pans',
    altura:1_70,
}];

let respuestaObjeto = objetos.map((valor) => ({
    ...valor,
    nombre:'Maria',
    

}));
console.log(respuestaObjeto);


let respuestaObjeto2 = objetos2.map((valor)=>({
    ...valor,
    nombre:'Melissa'
}));
console.log(respuestaObjeto2);


