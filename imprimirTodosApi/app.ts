
const peticion = async () => {
    const dom = document.querySelector('.container');
  const respuestas = await fetch("https://reqres.in/api/users?page=1", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await respuestas.json();
  console.log(data);
  for(let i = 0; i < data.length ; i++){
    console.log(data[i])
      
  }

}
console.log(peticion());



const elementoDom = document.querySelector('.container') || false;
(elementoDom) ? elementoDom.innerHTML = '<div>Hola desde el inner</div>' : '';
