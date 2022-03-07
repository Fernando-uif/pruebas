const boton1 = document.querySelector('.boton1');
const boton2 = document.querySelector('.boton2');
const imagen = document.querySelector('.loading');

boton1.addEventListener('click',()=>{
    boton1.classList.toggle('aparecer');
    imagen.classList.remove('animation');
    // imagen.style.display = 'none';
});
// Mejor le coloca una clase al darle click para uqe no sea vea los estilos en el html
boton2.addEventListener('click',()=>{
    imagen.style.animation = 'girar 2s alternate infinite';
})


const objeto = document.querySelector('.elementoATomar');

