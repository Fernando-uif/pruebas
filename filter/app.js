const personas = [
  {
    id: 0,
    nombre: "Fernando",
    apellido: "Sosa",
    edad: 27,
    estatura: 1.8,
  },

  {
    id: 1,
    nombre: "Anacleto",
    apellido: "Perez",
    edad: 62,
    estatura: 8.1,
  },
];

 const respuesta = personas.filter((persona, i) =>   personas[i].id === i);
 console.log(respuesta, 'Tenmos la respuesta de la busqueda', );