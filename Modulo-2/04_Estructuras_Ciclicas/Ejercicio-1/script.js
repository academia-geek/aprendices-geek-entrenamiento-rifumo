let suma = 0;
let calif = 0;
let prom = 0;

for(let i=1; i<=7; i++){
  calif = Number(prompt('Ingrese calificación'));
  suma = suma + calif;
}

prom = suma/7;
alert('El promedio es: ' + prom.toFixed(2));
