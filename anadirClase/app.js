const prueba1 = document.querySelector('.prueba-1');
prueba1.addEventListener('click',function(){
    this.classList.una = 'Clase_que_no_sabemos_que_onda';
    this.classList.clasePrueba = 'otraClase';
    console.log('Entrando al click');
    console.log(this);
    
    this.classList.add('Agregando');
    console.log(this.classList);
    
})
