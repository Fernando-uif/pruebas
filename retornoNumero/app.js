function soloNumero(event) {
  if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;
}
function soloTexto(event) {
  if (
    !(
      (event.charCode >= 65 && event.charCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122) ||
      event.charCode === 32
    )
  )
    event.returnValue = false;
}

const inputTexto = document.querySelector("#inputTexto");
console.log(inputTexto, "inputtexto");

inputTexto.addEventListener("keypress", (event) => {
  if ( !( (event.charCode >= 65 && event.charCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122) ||
      event.charCode === 32
    )
  ) {
    console.log("dentro condision");

    event.returnValue = false;
  }
  console.log(event, "tenemos el evento");
  console.log("algo");
});

// 34 173

function soloTextoCaracter(event) {
  if (
    !((event.charCode >= 34 && event.charCode <= 173) || event.charCode === 32)
  )
    event.returnValue = false;
}
