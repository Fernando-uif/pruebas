const personas = [
  {
    nombre: "Fernando",
    apellido: "Sosa",
    edad: 27,
    estatura: 1.8,
  },

  {
    nombre: "Anacleto",
    apellido: "Perez",
    edad: 62,
    estatura: 8.1,
  },
];

 const respuesta = personas.filter((persona) =>   persona.apellido === 'Perez')
 console.log(respuesta, 'Tenmos la respuesta de la busqueda');