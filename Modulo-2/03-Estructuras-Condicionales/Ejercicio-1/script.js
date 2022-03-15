let cap = 0;
let p_int = 0;
let capf = 0;
let int = 0;

cap = Number(prompt('Ingrese capital invertido'));
p_int = Number(prompt('Ingrese concepto intereses'));

int = cap * p_int;

if(int > 7000){
    capf = cap + int;
    console.log('El capital final es: '+ capf);
}


