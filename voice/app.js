const textArea = document.querySelector("#textArea");
const boton = document.querySelector("#convert");

console.log(textArea, boton);


const speach = new SpeechSynthesisUtterance();
boton.addEventListener('click',()=>{
    speach.text = textArea.value;
    speach.pitch = 1;
    speach.volume = 1;
    speach.lang = 'es-ES';
    speach.rate = 1;
    speechSynthesis.speak(speach);
});