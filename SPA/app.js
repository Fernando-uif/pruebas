import { router } from "./router/index.routes.js";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  console.log("Ha cambiado el hash");
  router(window.location.hash);
});
