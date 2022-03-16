const estilos = [
    {
        "nombreEmpresa": "serverPack",
        "--color-generico-boton": "#F89B01",
        "--color-generico-boton-2": "#F8C601",
        "--color-serverPack-Fuente": "#F8C601",
        "--color-serverPack-Secundario": "#F89B01",
        "--color-serverPack-Terciario": "#FB9C01"
    },
    {
        "nombreEmpresa": "bizzarro",
        "--color-generico-boton": "#000",
        "--color-generico-boton-2": "#464646",
        "--color-serverPack-Fuente": "#000",
        "--color-serverPack-Secundario": "#464646",
        "--color-serverPack-Terciario": "#464646"
    },
    {
        "nombreEmpresa": "Accesspack",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    },
    {
        "nombreEmpresa": "aruba",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    },
    {
        "nombreEmpresa": "CentralCargo",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    },
    {
        "nombreEmpresa": "GTL",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    },
    {
        "nombreEmpresa": "Losga",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    },
    {
        "nombreEmpresa": "LuisCii",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    },
    {
        "nombreEmpresa": "Pialogistica",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    },
    {
        "nombreEmpresa": "Sigfr",
        "--color-generico-boton": "",
        "--color-generico-boton-2": "",
        "--color-serverPack-Fuente": "",
        "--color-serverPack-Secundario": "",
        "--color-serverPack-Terciario": ""
    }
    
]

const respuesta = estilos.filter(value => value.nombreEmpresa === 'serverPack');
console.log(respuesta[0]["--color-generico-boton"]);


for(const propiedad  in respuesta[0]){
    console.log(`${propiedad}:${respuesta[0][propiedad]}`);
    document.documentElement.style.setProperty(`${propiedad}`, `${respuesta[0][propiedad]}`);
}