const containerToggle = document.querySelector(".containerToggle");

const toggleButton = document.querySelector(".container__toggle");


containerToggle.addEventListener("click", function () {
    this.classList.toggle("container-active");
    toggleButton.classList.toggle("container__toggle-active");
    console.log('Escuchando');
    
});
toggleButton.addEventListener("click", function () {
//   this.classList.toggle("container__toggle-active");
//   containerToggle.toggle("container-active");
});
