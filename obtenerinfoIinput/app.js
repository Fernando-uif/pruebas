const inputs = document.body.querySelectorAll('input');
const labels  = document.body.querySelectorAll('label');
const boton = document.querySelector('#boton')
const select  = document.querySelectorAll('select');

const respuesta ={};

boton.addEventListener('click',()=>{
    for(let i = 0; i <= inputs.length - 1; i++){
        
        respuesta[labels[i].innerText] = inputs[i].value;
    }
    for(let i = 0; i <= select.length - 1; i++){
        
        respuesta[select[i].options[select[i].selectedIndex].innerText] = select[i].value;
    }
    // window.alert(JSON.stringify(respuesta))
})
console.log(respuesta);