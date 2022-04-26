const route = (event) => {
console.log(window.event);
console.log(event);
    event = event || window.event;
    event.preventDefault();
    console.log(event.target.href);
    window.history.pushState({}, "", event.target.href);
  handleLocation();

};

const routes = {
  "/personas.html":"/amigos.html",
  "/about":"/enemigos.html",
  "/lorem":"/lorem.html",
  404:"/404.html"
};



const handleLocation = async() => {

    const path  = window.location.pathname;
    console.log(window.location.pathname);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=> data.text());
    document.querySelector('#main-page').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation(); 