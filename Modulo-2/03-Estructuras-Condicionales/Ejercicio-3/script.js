let compra = 0;
let descuento = 0;
let totalPagar = 0;

compra = Number(prompt('Ingresar valor de la compra'));

if(compra > 100000){
  descuento = compra * 0.2;
}
else{
    descuento = 0;
}
totalPagar = compra - descuento;
alert('Total a pagar: '+ totalPagar);

