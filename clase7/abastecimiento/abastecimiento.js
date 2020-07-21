let edad = 30;
let edadMaxima = 80;
let snack = "paquete de pipas";
let snackPorDias = 0.5;

let restoDeVida = edadMaxima - edad;
let restoADias = restoDeVida*365;
let abastecimiento = restoADias*snackPorDias;

alert("Vas a necesitar " + abastecimiento + " " + snack + 
" para que te alcancen hasta los " + edadMaxima + " años!");

let precioSnack = 20;

console.log(abastecimiento*precioSnack);