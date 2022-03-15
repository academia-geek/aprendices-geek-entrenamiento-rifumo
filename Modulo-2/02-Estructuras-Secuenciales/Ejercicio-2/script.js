let cm = 18;
let ch = 15;
let ph = 0;
let pm = 0;

let ct = cm + ch;

pm = cm / ct * 100;
ph = ch / ct * 100;
console.log("El porcentaje de hombres es: " +  Math.round(pm));
console.log("El porcentaje de hombres es: " +  Math.round(ph));
