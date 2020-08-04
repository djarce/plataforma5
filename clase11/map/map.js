//Ejercicio 1
let numbers = [3, 7, 13, 99];
// CODEA LA SOLUCIÓN
let dobles = numbers.map((element) => {
  return element * 2;
});

console.log(numbers); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]

//Ejercicio 2
let frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];
// CODEA LA SOLUCIÓN
let frasesExclamadas = frases.map((element) => {
  let exclamada = "¡" + element + "!";
  return exclamada;
});

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

//Ejercicio 3
const playlist = [
  { nombre: "Everlong", duracion: "120" },
  { nombre: "The Pretender", duracion: "168" },
  { nombre: "Learn to Fly", duracion: "204" },
];
// CODEA LA SOLUCIÓN
let duracionesEnMinutos = playlist.map(({ duracion }) => {
  let minutos = duracion / 60;
  return minutos;
});

console.log(duracionesEnMinutos); // [ 2, 2.8, 3.4 ]

//Ejercicio 4
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 
// CODEA LA SOLUCIÓN
function fizzBuzz(numArr){
    let salida= [];
    numArr.map((element) =>{
        if(element % 3 === 0 && element % 5 === 0){
            element = "fizzbuzz";
            salida.push(element);          
        } else if (element % 3 === 0){
            element = "fizz";
            salida.push(element);
        } else if (element % 5=== 0){
            element= "buzz";
            salida.push(element);
        } else{
            element = element;
            salida.push(element);
        }
    });
    return salida;
}

console.log( fizzBuzz(numeros) ); 
// [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz' ]