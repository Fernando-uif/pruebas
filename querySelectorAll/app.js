const elementos = document.querySelectorAll(".elementoInput");
// console.log(elementos.values);

document.querySelector(".boton").addEventListener("click", () => {
    for(let i = 0; i < elementos.length; i++){
        console.log(elementos[i].value);
    }
});
