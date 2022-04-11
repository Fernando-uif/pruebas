import resultaInterface from './interface/respuestaInterface';

const app = document.querySelector('#app') as HTMLDivElement;

const respuesta:resultaInterface =  {
  "valor Factura": "5000050",
  "flete": "4102000",
  "derechos": "5484111",
  "gastos": "11112",
  "Suma Asegurada": "14597273",
  "Prima Neta": "58389.09",
  "Derechos": "250",
  "IVA": "9382.25",
  "tipoMoneda": "pesos mexicanos",
  "cuota": "0.004",
  "total": 68021.34
}


app.innerHTML = `<pre>${JSON.stringify(respuesta, null, 3) } </pre>`;


