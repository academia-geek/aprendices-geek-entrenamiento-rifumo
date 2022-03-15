let num = 0;
let cubo = 0;
let cuarta = 0;

for(let i=1; i<=10; i++){
  num = Number(prompt('Ingrese número'));
  cubo = Math.pow(num,3);
  cuarta =  Math.pow(num,4);
  alert('El cubo es : ' + cubo + ' y la cuarta es: ' + cuarta);
}

