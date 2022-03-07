const suma1 = async (numero1, numero2) => {
  let respu = await (numero1 + numero2);
  return respu;
};

suma1(3,46).then(valor =>{
    console.log('Tenemos el valor de la suma 1',valor)
})
const suma2 = async(valor, otro) => {
    let respuesta = await valor + otro;
    return respuesta;

}
console.log(suma2(suma1, 3), 'Tenemos la respuesta de la suma');

// const peticionChuck = async() => {
//     let respuesta = await fetch('https://api.chucknorris.io/jokes/random');
//     console.log(typeof respuesta);
//     console.log(respuesta);
    
//     let algo = await respuesta.json();
// console.log(algo);

    
// }
// peticionChuck();