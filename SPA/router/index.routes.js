import home from "../views/home.js";
import salida from "../views/exit.js";
import about from "../views/about.js";

let contenido = document.querySelector(".contenedor");

export const router = (ruta) => {
  contenido.innerHTML = "";
  switch (ruta) {
    case "#/home":
      // contenido.removeChild('div');
      return contenido.append(home());
    case "#/exit":
      return contenido.append(salida());
    case "#/about":
      return contenido.append(about());
    case "#/home/menu":
      break;

    default:
      console.log("default");
  }
};
