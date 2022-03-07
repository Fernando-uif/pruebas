function Calcula_Saldo(Cargo: number, Abono: number, Tipo: any) {
 
 return Cargo - Abono;
}



function Calcula_Total(Cargo: number, Abono: number, Tipo: string) {
  let subtotal = 0;
  let total = 0;

  if (Tipo === "Factura") {
    subtotal =Cargo - Abono ;
    total = subtotal;
    console.log("aqui: ", total);
  }
  return total;
}


console.log(Calcula_Saldo(5,5,null));

Calcula_Total(4, 2, 'Factura')

const obj5 = {
    Cargo:30,
    Abono:5,
    Tipo:'Factura',
}
Object.freeze(obj5);

const { Cargo, Abono, Tipo } = obj5;

console.log(Calcula_Total(Cargo,Abono,Tipo),'resultado final'); 
