const elemento = document.querySelector('.inpu1');
console.log(elemento);

const regCaracteres = ( etiqueta ) => {
    // * Expresion regular para detecar si vienen caracteres especiales
    const reg = /[^a-zA-Z\s\0-9]/g;

    // * Validacion si viene el texto con algun caracter especial
    // * Mandamos un aviso si incumple seguido a ello lo dejamos limpio
    if(reg.test(etiqueta.value)){
        window.alert('No debe de contener caracteres especiales');
        etiqueta.value = '';
        return;
    }
}