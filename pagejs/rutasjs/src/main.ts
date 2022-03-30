
const rutas = (route:string) => {

  switch (route) {
    case '#/':
      console.log('Estamos en el login');
      break;
    case '#/usuarios':
      console.log('Estamos en usuario');
      break;
    case '#/login':
      console.log('Estamos en login');
      break;
    case '#/home':
      console.log('Estamos en home');
      break;
    default:
      console.log('No se ha encontrado nada 404');
      break;
  }

}

window.addEventListener('hashchange',()=>{


  rutas(window.location.hash);

})

